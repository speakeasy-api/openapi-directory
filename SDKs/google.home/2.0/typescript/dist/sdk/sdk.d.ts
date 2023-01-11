import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Assistant } from "./assistant";
import { Bluetooth } from "./bluetooth";
import { DeviceInfo } from "./deviceinfo";
import { DeviceSettings } from "./devicesettings";
import { StaticFiles } from "./staticfiles";
import { Wifi } from "./wifi";
export declare const ServerList: readonly ["http://example.com/setup"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    assistant: Assistant;
    bluetooth: Bluetooth;
    deviceInfo: DeviceInfo;
    deviceSettings: DeviceSettings;
    staticFiles: StaticFiles;
    wifi: Wifi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
