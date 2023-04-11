import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateApplicationRequestBodyKeys extends SpeakeasyBase {
    /**
     * Public key
     */
    publicKey?: string;
}
/**
 * Application privacy config
 */
export declare class UpdateApplicationRequestBodyPrivacy extends SpeakeasyBase {
    /**
     * If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.
     */
    improveAi?: boolean;
}
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    /**
     * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
     */
    capabilities?: shared.Capabilities;
    keys?: UpdateApplicationRequestBodyKeys;
    /**
     * Application Name
     */
    name: string;
    /**
     * Application privacy config
     */
    privacy?: UpdateApplicationRequestBodyPrivacy;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    requestBody: UpdateApplicationRequestBody;
    /**
     * The ID of the application
     */
    id: string;
}
/**
 * Unsupported Content Type Header
 */
export declare class UpdateApplication415ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Invalid Accept Header
 */
export declare class UpdateApplication406ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Invalid Request Method
 */
export declare class UpdateApplication405ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Resource Not Found
 */
export declare class UpdateApplication404ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
/**
 * Credential is missing or invalid
 */
export declare class UpdateApplication401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
export declare class UpdateApplication400ApplicationJSONInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Invalid Request
 */
export declare class UpdateApplication400ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    invalidParameters?: UpdateApplication400ApplicationJSONInvalidParameters[];
    title?: string;
    type?: string;
}
export declare class UpdateApplication200ApplicationJSONKeys extends SpeakeasyBase {
    privateKey?: string;
    publicKey?: string;
}
/**
 * Application privacy config
 */
export declare class UpdateApplication200ApplicationJSONPrivacy extends SpeakeasyBase {
    /**
     * If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.
     */
    improveAi?: boolean;
}
/**
 * Success
 */
export declare class UpdateApplication200ApplicationJSON extends SpeakeasyBase {
    /**
     * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
     */
    capabilities?: shared.Capabilities;
    /**
     * The application's ID
     */
    id?: string;
    keys?: UpdateApplication200ApplicationJSONKeys;
    /**
     * Friendly identifier for your application. This is not unique
     */
    name?: string;
    /**
     * Application privacy config
     */
    privacy?: UpdateApplication200ApplicationJSONPrivacy;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateApplication200ApplicationJSONObject?: UpdateApplication200ApplicationJSON;
    /**
     * Invalid Request
     */
    updateApplication400ApplicationJSONObject?: UpdateApplication400ApplicationJSON;
    /**
     * Credential is missing or invalid
     */
    updateApplication401ApplicationJSONObject?: UpdateApplication401ApplicationJSON;
    /**
     * Resource Not Found
     */
    updateApplication404ApplicationJSONObject?: UpdateApplication404ApplicationJSON;
    /**
     * Invalid Request Method
     */
    updateApplication405ApplicationJSONObject?: UpdateApplication405ApplicationJSON;
    /**
     * Invalid Accept Header
     */
    updateApplication406ApplicationJSONObject?: UpdateApplication406ApplicationJSON;
    /**
     * Unsupported Content Type Header
     */
    updateApplication415ApplicationJSONObject?: UpdateApplication415ApplicationJSON;
}
