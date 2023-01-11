import { AxiosInstance } from "axios";
import { Pools } from "./pools";
import { Replicas } from "./replicas";
export declare const ServerList: readonly ["https://www.googleapis.com/replicapool/v1beta1/projects"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    pools: Pools;
    replicas: Replicas;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
