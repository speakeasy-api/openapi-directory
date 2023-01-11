import { AxiosInstance } from "axios";
import { BehavioralEventsTracking } from "./behavioraleventstracking";
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    behavioralEventsTracking: BehavioralEventsTracking;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
