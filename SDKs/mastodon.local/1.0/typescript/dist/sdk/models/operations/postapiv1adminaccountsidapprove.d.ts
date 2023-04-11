import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminAccountsIdApproveSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AdminAccountsIdApproveRequest extends SpeakeasyBase {
    /**
     * ID of the account
     */
    id: string;
}
export declare class PostApiV1AdminAccountsIdApproveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
