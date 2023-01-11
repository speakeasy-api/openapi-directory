import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Feature } from "./feature";
import { FeatureTaxonomy } from "./featuretaxonomy";
import { Name } from "./name";
import { NameAuthority } from "./nameauthority";
import { Search } from "./search";


export const ServerList = [
	"https://apps.gov.bc.ca/pub/bcgnws",
	"https://test.apps.gov.bc.ca/pub/bcgnws",
	"https://delivery.apps.gov.bc.ca/pub/bcgnws",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public feature: Feature;
  public featureTaxonomy: FeatureTaxonomy;
  public name: Name;
  public nameAuthority: NameAuthority;
  public search: Search;

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
    
    this.feature = new Feature(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.featureTaxonomy = new FeatureTaxonomy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.name = new Name(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.nameAuthority = new NameAuthority(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.search = new Search(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}