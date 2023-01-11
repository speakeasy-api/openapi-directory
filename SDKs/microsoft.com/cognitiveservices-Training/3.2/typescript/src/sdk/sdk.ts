import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { DomainsApi } from "./domainsapi";
import { ImageApi } from "./imageapi";
import { ImageRegionProposalApi } from "./imageregionproposalapi";
import { PredictionsApi } from "./predictionsapi";
import { ProjectApi } from "./projectapi";
import { SuggestTagsAndRegionsApi } from "./suggesttagsandregionsapi";
import { TagsApi } from "./tagsapi";


export const ServerList = [
	"https://southcentralus.api.cognitive.microsoft.com/customvision/v3.2/training",
	"https://{Endpoint}/customvision/v3.2/training",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public domainsApi: DomainsApi;
  public imageApi: ImageApi;
  public imageRegionProposalApi: ImageRegionProposalApi;
  public predictionsApi: PredictionsApi;
  public projectApi: ProjectApi;
  public suggestTagsAndRegionsApi: SuggestTagsAndRegionsApi;
  public tagsApi: TagsApi;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.domainsApi = new DomainsApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.imageApi = new ImageApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.imageRegionProposalApi = new ImageRegionProposalApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.predictionsApi = new PredictionsApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projectApi = new ProjectApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.suggestTagsAndRegionsApi = new SuggestTagsAndRegionsApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tagsApi = new TagsApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}