import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Searchanalytics } from "./searchanalytics";
import { Sitemaps } from "./sitemaps";
import { Sites } from "./sites";
import { UrlInspection } from "./urlinspection";
import { UrlTestingTools } from "./urltestingtools";


export const ServerList = [
	"https://searchconsole.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.google.com/webmaster-tools/search-console-api/*/
export class SDK {
  public searchanalytics: Searchanalytics;
  public sitemaps: Sitemaps;
  public sites: Sites;
  public urlInspection: UrlInspection;
  public urlTestingTools: UrlTestingTools;

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
    
    this.searchanalytics = new Searchanalytics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sitemaps = new Sitemaps(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sites = new Sites(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.urlInspection = new UrlInspection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.urlTestingTools = new UrlTestingTools(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}