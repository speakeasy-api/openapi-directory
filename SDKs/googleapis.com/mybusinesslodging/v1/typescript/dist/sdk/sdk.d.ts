import { AxiosInstance } from "axios";
import { Locations } from "./locations";
export declare const ServerList: readonly ["https://mybusinesslodging.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    locations: Locations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
