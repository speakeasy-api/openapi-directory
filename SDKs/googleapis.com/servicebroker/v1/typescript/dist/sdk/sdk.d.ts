import { V1 } from "./v1";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://servicebroker.googleapis.com/"];
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
 * The Google Cloud Platform Service Broker API provides Google hosted
 *
 * @remarks
 * implementation of the Open Service Broker API
 * (https://www.openservicebrokerapi.org/).
 *
 *
 * @see {@link https://cloud.google.com/kubernetes-engine/docs/concepts/add-on/service-broker}
 */
export declare class SDK {
    v1: V1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
