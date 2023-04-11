import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RevokeAPISecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RevokeAPISecretRequest extends SpeakeasyBase {
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
 * Operation forbidden by permissions or because this is the only API secret and you are required to have at least one.
 */
export declare class RevokeAPISecret403ApplicationJSON extends SpeakeasyBase {
    /**
     * More detail regarding this error
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
/**
 * Credentials are missing or invalid
 */
export declare class RevokeAPISecret401ApplicationJSON extends SpeakeasyBase {
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
export declare class RevokeAPISecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Credentials are missing or invalid
     */
    revokeAPISecret401ApplicationJSONObject?: RevokeAPISecret401ApplicationJSON;
    /**
     * Operation forbidden by permissions or because this is the only API secret and you are required to have at least one.
     */
    revokeAPISecret403ApplicationJSONObject?: RevokeAPISecret403ApplicationJSON;
    /**
     * Item not found
     */
    revokeAPISecret404ApplicationJSONOneOf?: any;
}
