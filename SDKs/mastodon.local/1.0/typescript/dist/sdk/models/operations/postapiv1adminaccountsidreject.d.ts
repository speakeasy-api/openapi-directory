import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminAccountsIdRejectSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AdminAccountsIdRejectRequest extends SpeakeasyBase {
    /**
     * ID of the account
     */
    id: string;
}
export declare class PostApiV1AdminAccountsIdRejectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
