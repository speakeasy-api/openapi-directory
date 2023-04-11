import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountKeySecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountKeyRequest extends SpeakeasyBase {
    /**
     * UUID of the key to retrieve
     */
    keyId: string;
}
export declare class GetAccountKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
