import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAccountKeySecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAccountKeyRequest extends SpeakeasyBase {
    /**
     * UUID of the key to retrieve
     */
    keyId: string;
}
export declare class RemoveAccountKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
