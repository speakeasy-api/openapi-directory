import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminAccountsIdActionSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
/**
 * Type of action to be taken. Enumerable oneOf: none disable silence suspend
 */
export declare enum PostApiV1AdminAccountsIdActionRequestBodyTypeEnum {
    None = "none",
    Disable = "disable",
    Silence = "silence",
    Suspend = "suspend"
}
export declare class PostApiV1AdminAccountsIdActionRequestBody extends SpeakeasyBase {
    /**
     * ID of an associated report that caused this action to be taken
     */
    reportId?: string;
    /**
     * Whether an email should be sent to the user with the above information.
     */
    sendEmailNotification?: boolean;
    /**
     * Additional text for clarification of why this action was taken
     */
    text?: string;
    /**
     * Type of action to be taken. Enumerable oneOf: none disable silence suspend
     */
    type?: PostApiV1AdminAccountsIdActionRequestBodyTypeEnum;
    /**
     * ID of a preset warning
     */
    warningPresetId?: string;
}
export declare class PostApiV1AdminAccountsIdActionRequest extends SpeakeasyBase {
    requestBody?: PostApiV1AdminAccountsIdActionRequestBody;
    /**
     * ID of the account
     */
    id: string;
}
export declare class PostApiV1AdminAccountsIdActionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
