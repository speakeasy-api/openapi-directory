import { AxiosInstance } from "axios";
import { CompileApi } from "./compileapi";
import { DataApi } from "./dataapi";
import { HealthApi } from "./healthapi";
import { PolicyApi } from "./policyapi";
import { QueryApi } from "./queryapi";
export declare const ServerList: readonly ["http://openpolicy.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    compileAPI: CompileApi;
    dataAPI: DataApi;
    healthAPI: HealthApi;
    policyAPI: PolicyApi;
    queryAPI: QueryApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
