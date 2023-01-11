import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { InfoTypes } from "./infotypes";
import { Locations } from "./locations";
import { Projects } from "./projects";


export const ServerList = [
	"https://dlp.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://cloud.google.com/dlp/docs/*/
export class SDK {
  public infoTypes: InfoTypes;
  public locations: Locations;
  public projects: Projects;

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
    
    this.infoTypes = new InfoTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.locations = new Locations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projects = new Projects(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}