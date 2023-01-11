import { AxiosInstance } from "axios";
import { AccessPolicies } from "./accesspolicies";
import { Operations } from "./operations";
import { Organizations } from "./organizations";
export declare const ServerList: readonly ["https://accesscontextmanager.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accessPolicies: AccessPolicies;
    operations: Operations;
    organizations: Organizations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
