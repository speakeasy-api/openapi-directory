import { AxiosInstance } from "axios";
import { OdWeather } from "./odweather";
export declare const ServerList: readonly ["https://api.oceandrivers.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    odWeather: OdWeather;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
