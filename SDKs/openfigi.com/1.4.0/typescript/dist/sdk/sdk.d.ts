import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["https://api.openfigi.com/{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getMappingValuesKey - Get values for enum-like fields.
    **/
    getMappingValuesKey(req: operations.GetMappingValuesKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetMappingValuesKeyResponse>;
    /**
     * postMapping - Allows mapping from third-party identifiers to FIGIs.
    **/
    postMapping(req: operations.PostMappingRequest, config?: AxiosRequestConfig): Promise<operations.PostMappingResponse>;
}
