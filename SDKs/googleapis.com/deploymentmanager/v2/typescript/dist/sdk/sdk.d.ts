import { Deployments } from "./deployments";
import { Manifests } from "./manifests";
import { Operations } from "./operations";
import { Resources } from "./resources";
import { Types } from "./types";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://deploymentmanager.googleapis.com/"];
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
 * The Google Cloud Deployment Manager v2 API provides services for configuring, deploying, and viewing Google Cloud services and APIs via templates which specify deployments of Cloud resources.
 *
 * @see {@link https://cloud.google.com/deployment-manager}
 */
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
    private _globals;
    constructor(props?: SDKProps);
}
