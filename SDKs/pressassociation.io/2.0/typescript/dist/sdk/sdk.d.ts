import { AxiosInstance } from "axios";
import { Asset } from "./asset";
import { Channel } from "./channel";
import { Contributor } from "./contributor";
import { Feature } from "./feature";
import { Platform } from "./platform";
import { Schedule } from "./schedule";
export declare const ServerList: readonly ["https://tv.api.pressassociation.io/v2", "http://tv.api.pressassociation.io/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    asset: Asset;
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
    constructor(props: SDKProps);
}
