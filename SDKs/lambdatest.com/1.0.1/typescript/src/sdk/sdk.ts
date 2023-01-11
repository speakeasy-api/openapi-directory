import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { GetDevices } from "./getdevices";
import { GetLocations } from "./getlocations";
import { GetOsBrowsers } from "./getosbrowsers";
import { GetProfiles } from "./getprofiles";
import { GetResolutions } from "./getresolutions";
import { GetScreenshots } from "./getscreenshots";
import { GetZippedScreenshots } from "./getzippedscreenshots";
import { StartScreenshotTest } from "./startscreenshottest";
import { StopScreenshotTest } from "./stopscreenshottest";


export const ServerList = [
	"https://api.lambdatest.com/screenshots/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public getDevices: GetDevices;
  public getLocations: GetLocations;
  public getOSBrowsers: GetOsBrowsers;
  public getProfiles: GetProfiles;
  public getResolutions: GetResolutions;
  public getScreenshots: GetScreenshots;
  public getZippedScreenshots: GetZippedScreenshots;
  public startScreenshotTest: StartScreenshotTest;
  public stopScreenshotTest: StopScreenshotTest;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.getDevices = new GetDevices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.getLocations = new GetLocations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.getOSBrowsers = new GetOsBrowsers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.getProfiles = new GetProfiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.getResolutions = new GetResolutions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.getScreenshots = new GetScreenshots(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.getZippedScreenshots = new GetZippedScreenshots(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.startScreenshotTest = new StartScreenshotTest(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stopScreenshotTest = new StopScreenshotTest(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}