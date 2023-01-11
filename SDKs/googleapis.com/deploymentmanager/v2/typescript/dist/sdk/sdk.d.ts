import { AxiosInstance } from "axios";
import { Deployments } from "./deployments";
import { Manifests } from "./manifests";
import { Operations } from "./operations";
import { Resources } from "./resources";
import { Types } from "./types";
export declare const ServerList: readonly ["https://deploymentmanager.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    deployments: Deployments;
    manifests: Manifests;
    operations: Operations;
    resources: Resources;
    types: Types;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
