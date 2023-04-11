import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateApplicationRequestBodyKeys extends SpeakeasyBase {
    /**
     * Public key
     */
    publicKey?: string;
}
/**
 * Application privacy config
 */
export declare class CreateApplicationRequestBodyPrivacy extends SpeakeasyBase {
    /**
     * If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.
     */
    improveAi?: boolean;
}
export declare class CreateApplicationRequestBody extends SpeakeasyBase {
    /**
     * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
     */
    capabilities?: shared.Capabilities;
    keys?: CreateApplicationRequestBodyKeys;
    /**
     * Application Name
     */
    name: string;
    /**
     * Application privacy config
     */
    privacy?: CreateApplicationRequestBodyPrivacy;
}
/**
 * Unsupported Content Type Header
 */
export declare class CreateApplication415ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateApplication406ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateApplication405ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateApplication401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    title?: string;
    type?: string;
}
export declare class CreateApplication400ApplicationJSONInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Invalid Request
 */
export declare class CreateApplication400ApplicationJSON extends SpeakeasyBase {
    detail?: string;
    /**
     * Instance ID
     */
    instance?: string;
    invalidParameters?: CreateApplication400ApplicationJSONInvalidParameters[];
    title?: string;
    type?: string;
}
export declare class CreateApplication201ApplicationJSONKeys extends SpeakeasyBase {
    privateKey?: string;
    publicKey?: string;
}
/**
 * Application privacy config
 */
export declare class CreateApplication201ApplicationJSONPrivacy extends SpeakeasyBase {
    /**
     * If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.
     */
    improveAi?: boolean;
}
/**
 * Success
 */
export declare class CreateApplication201ApplicationJSON extends SpeakeasyBase {
    /**
     * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
     */
    capabilities?: shared.Capabilities;
    /**
     * The application's ID
     */
    id?: string;
    keys?: CreateApplication201ApplicationJSONKeys;
    /**
     * Friendly identifier for your application. This is not unique
     */
    name?: string;
    /**
     * Application privacy config
     */
    privacy?: CreateApplication201ApplicationJSONPrivacy;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    createApplication201ApplicationJSONObject?: CreateApplication201ApplicationJSON;
    /**
     * Invalid Request
     */
    createApplication400ApplicationJSONObject?: CreateApplication400ApplicationJSON;
    /**
     * Credential is missing or invalid
     */
    createApplication401ApplicationJSONObject?: CreateApplication401ApplicationJSON;
    /**
     * Invalid Request Method
     */
    createApplication405ApplicationJSONObject?: CreateApplication405ApplicationJSON;
    /**
     * Invalid Accept Header
     */
    createApplication406ApplicationJSONObject?: CreateApplication406ApplicationJSON;
    /**
     * Unsupported Content Type Header
     */
    createApplication415ApplicationJSONObject?: CreateApplication415ApplicationJSON;
}
