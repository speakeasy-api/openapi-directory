import { GetDevices } from "./getdevices";
import { GetLocations } from "./getlocations";
import { GetOSBrowsers } from "./getosbrowsers";
import { GetProfiles } from "./getprofiles";
import { GetResolutions } from "./getresolutions";
import { GetScreenshots } from "./getscreenshots";
import { GetZippedScreenshots } from "./getzippedscreenshots";
import { StartScreenshotTest } from "./startscreenshottest";
import { StopScreenshotTest } from "./stopscreenshottest";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.lambdatest.com/screenshots/v1"];
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
export declare class SDK {
    getDevices: GetDevices;
    getLocations: GetLocations;
    getOSBrowsers: GetOSBrowsers;
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
    private _globals;
    constructor(props?: SDKProps);
}
