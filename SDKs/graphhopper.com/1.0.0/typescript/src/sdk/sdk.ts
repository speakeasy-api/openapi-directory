import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { ClusterApi } from "./clusterapi";
import { GeocodingApi } from "./geocodingapi";
import { IsochroneApi } from "./isochroneapi";
import { MapMatchingApi } from "./mapmatchingapi";
import { MatrixApi } from "./matrixapi";
import { RouteOptimizationApi } from "./routeoptimizationapi";
import { RoutingApi } from "./routingapi";


export const ServerList = [
	"https://graphhopper.com/api/1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public clusterAPI: ClusterApi;
  public geocodingAPI: GeocodingApi;
  public isochroneAPI: IsochroneApi;
  public mapMatchingAPI: MapMatchingApi;
  public matrixAPI: MatrixApi;
  public routeOptimizationAPI: RouteOptimizationApi;
  public routingAPI: RoutingApi;

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
    
    this.clusterAPI = new ClusterApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.geocodingAPI = new GeocodingApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.isochroneAPI = new IsochroneApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mapMatchingAPI = new MapMatchingApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.matrixAPI = new MatrixApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.routeOptimizationAPI = new RouteOptimizationApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.routingAPI = new RoutingApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}