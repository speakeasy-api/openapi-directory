import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ManagedShortLinks } from "./managedshortlinks";
import { ShortLinks } from "./shortlinks";
import { V1 } from "./v1";


export const ServerList = [
	"https://firebasedynamiclinks.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://firebase.google.com/docs/dynamic-links/*/
export class SDK {
  public managedShortLinks: ManagedShortLinks;
  public shortLinks: ShortLinks;
  public v1: V1;

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
    
    this.managedShortLinks = new ManagedShortLinks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.shortLinks = new ShortLinks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.v1 = new V1(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}