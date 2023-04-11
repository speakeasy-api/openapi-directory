import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAPISecretsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RetrieveAPISecretsRequest extends SpeakeasyBase {
    /**
     * The API key to manage secrets for
     */
    apiKey: string;
}
/**
 * Credentials are missing or invalid
 */
export declare class RetrieveAPISecrets401ApplicationJSON extends SpeakeasyBase {
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
/**
 * The single `secrets` key returns an array of API secrets
 */
export declare class RetrieveAPISecrets200ApplicationJSONEmbedded extends SpeakeasyBase {
    /**
     * Array of API secrets
     */
    secrets?: shared.SecretInfo[];
}
/**
 * The list of your current API secrets
 */
export declare class RetrieveAPISecrets200ApplicationJSON extends SpeakeasyBase {
    /**
     * The single `secrets` key returns an array of API secrets
     */
    embedded?: RetrieveAPISecrets200ApplicationJSONEmbedded;
    /**
     * Links related to this resource
     */
    links?: shared.SecretMgmtLinks;
}
export declare class RetrieveAPISecretsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Item not found
     */
    errorAPIKeyNotFound?: shared.ErrorAPIKeyNotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The list of your current API secrets
     */
    retrieveAPISecrets200ApplicationJSONObject?: RetrieveAPISecrets200ApplicationJSON;
    /**
     * Credentials are missing or invalid
     */
    retrieveAPISecrets401ApplicationJSONObject?: RetrieveAPISecrets401ApplicationJSON;
}
