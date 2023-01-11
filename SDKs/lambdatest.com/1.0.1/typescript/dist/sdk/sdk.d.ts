import { AxiosInstance } from "axios";
import { GetDevices } from "./getdevices";
import { GetLocations } from "./getlocations";
import { GetOsBrowsers } from "./getosbrowsers";
import { GetProfiles } from "./getprofiles";
import { GetResolutions } from "./getresolutions";
import { GetScreenshots } from "./getscreenshots";
import { GetZippedScreenshots } from "./getzippedscreenshots";
import { StartScreenshotTest } from "./startscreenshottest";
import { StopScreenshotTest } from "./stopscreenshottest";
export declare const ServerList: readonly ["https://api.lambdatest.com/screenshots/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    getDevices: GetDevices;
    getLocations: GetLocations;
    getOSBrowsers: GetOsBrowsers;
    getProfiles: GetProfiles;
    getResolutions: GetResolutions;
    getScreenshots: GetScreenshots;
    getZippedScreenshots: GetZippedScreenshots;
    startScreenshotTest: StartScreenshotTest;
    stopScreenshotTest: StopScreenshotTest;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
