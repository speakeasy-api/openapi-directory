import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.openfigi.com/{basePath}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * A free & open API for FIGI discovery.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Get values for enum-like fields.
     */
    getMappingValuesKey(req: operations.GetMappingValuesKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetMappingValuesKeyResponse>;
    /**
     * Allows mapping from third-party identifiers to FIGIs.
     */
    postMapping(req: shared.MappingJob[], config?: AxiosRequestConfig): Promise<operations.PostMappingResponse>;
}
