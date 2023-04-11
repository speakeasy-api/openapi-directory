import { Conversion } from "./conversion";
import { Metadata } from "./metadata";
import { Validation } from "./validation";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://mermade.org.uk/api/v1", "http://mermade.org.uk/api/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Converter and validator for Swagger 2.0 to OpenAPI 3.0.x definitions
 *
 * @see {@link https://github.com/mermade/openapi-webconverter}
 */
export declare class SDK {
    /**
     * Conversion functions
     */
    conversion: Conversion;
    /**
     * Metadata functions
     */
    metadata: Metadata;
    /**
     * Validation functions
     */
    validation: Validation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
