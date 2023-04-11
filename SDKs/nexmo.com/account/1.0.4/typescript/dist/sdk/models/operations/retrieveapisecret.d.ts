import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAPISecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RetrieveAPISecretRequest extends SpeakeasyBase {
    /**
     * The API key to manage secrets for
     */
    apiKey: string;
    /**
     * ID of the API Secret
     */
    secretId: string;
}
/**
 * Credentials are missing or invalid
 */
export declare class RetrieveAPISecret401ApplicationJSON extends SpeakeasyBase {
    /**
     * More detail regarding this error, including the expected value
     */
    detail?: string;
    /**
     * Internal Trace ID
     */
    instance?: string;
    /**
     * Description of the error
     */
    title?: string;
    /**
     * URL for further information
     */
    type?: string;
}
export declare class RetrieveAPISecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Credentials are missing or invalid
     */
    retrieveAPISecret401ApplicationJSONObject?: RetrieveAPISecret401ApplicationJSON;
    /**
     * Item not found
     */
    retrieveAPISecret404ApplicationJSONOneOf?: any;
    /**
     * API secret response
     */
    secretInfo?: shared.SecretInfo;
}
