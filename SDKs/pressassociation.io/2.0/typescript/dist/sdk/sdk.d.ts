import { Asset } from "./asset";
import { Catalogue } from "./catalogue";
import { Channel } from "./channel";
import { Contributor } from "./contributor";
import { Feature } from "./feature";
import { Platform } from "./platform";
import { Schedule } from "./schedule";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://tv.api.pressassociation.io/v2", "http://tv.api.pressassociation.io/v2"];
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
 * Welcome to the API Reference Docs page for the Press Association TV API (v2).
 */
export declare class SDK {
    asset: Asset;
    catalogue: Catalogue;
    channel: Channel;
    contributor: Contributor;
    feature: Feature;
    platform: Platform;
    schedule: Schedule;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
