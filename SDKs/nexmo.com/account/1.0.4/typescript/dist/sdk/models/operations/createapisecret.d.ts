import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAPISecretSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateAPISecretRequest extends SpeakeasyBase {
    /**
     * The API key to manage secrets for
     */
    apiKey: string;
    createSecretRequest: shared.CreateSecretRequest;
}
/**
 * Credentials are missing or invalid
 */
export declare class CreateAPISecret401ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateAPISecret400ApplicationJSONInvalidParameters extends SpeakeasyBase {
    /**
     * Field name
     */
    name?: string;
    /**
     * Explanation of why parameter is considered invalid
     */
    reason?: string;
}
/**
 * Bad request. This usually indicates valid data but can also occur when a user has exceeded the allowed number of secrets on their account.
 */
export declare class CreateAPISecret400ApplicationJSON extends SpeakeasyBase {
    /**
     * More detail regarding this error, including the API key supplied
     */
    detail?: string;
    /**
     * Internal Trace ID
     */
    instance?: string;
    /**
     * Array of the parameters that are considered invalid, and explanations of why
     */
    invalidParameters?: CreateAPISecret400ApplicationJSONInvalidParameters[];
    /**
     * Description of the error
     */
    title?: string;
    /**
     * URL for further information
     */
    type?: string;
}
export declare class CreateAPISecretResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Item not found
     */
    errorAPIKeyNotFound?: shared.ErrorAPIKeyNotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request. This usually indicates valid data but can also occur when a user has exceeded the allowed number of secrets on their account.
     */
    createAPISecret400ApplicationJSONObject?: CreateAPISecret400ApplicationJSON;
    /**
     * Credentials are missing or invalid
     */
    createAPISecret401ApplicationJSONObject?: CreateAPISecret401ApplicationJSON;
    /**
     * Secret created
     */
    secretInfo?: shared.SecretInfo;
}
