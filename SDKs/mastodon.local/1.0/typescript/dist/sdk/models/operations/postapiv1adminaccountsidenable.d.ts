import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminAccountsIdEnableSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AdminAccountsIdEnableRequest extends SpeakeasyBase {
    /**
     * ID of the account
     */
    id: string;
}
export declare class PostApiV1AdminAccountsIdEnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
