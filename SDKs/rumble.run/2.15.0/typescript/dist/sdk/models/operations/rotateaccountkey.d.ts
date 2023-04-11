import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RotateAccountKeySecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RotateAccountKeyRequest extends SpeakeasyBase {
    /**
     * UUID of the key to retrieve
     */
    keyId: string;
}
export declare class RotateAccountKeyResponse extends SpeakeasyBase {
    /**
     * key details
     */
    apiKey?: shared.APIKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
