import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminAccountsIdUnsilenceSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AdminAccountsIdUnsilenceRequest extends SpeakeasyBase {
    /**
     * ID of the account
     */
    id: string;
}
export declare class PostApiV1AdminAccountsIdUnsilenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
