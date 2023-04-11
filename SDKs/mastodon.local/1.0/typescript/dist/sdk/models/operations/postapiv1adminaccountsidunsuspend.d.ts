import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminAccountsIdUnsuspendSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AdminAccountsIdUnsuspendRequest extends SpeakeasyBase {
    /**
     * ID of the account
     */
    id: string;
}
export declare class PostApiV1AdminAccountsIdUnsuspendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
