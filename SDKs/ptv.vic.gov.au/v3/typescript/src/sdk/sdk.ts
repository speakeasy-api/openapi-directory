import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Departures } from "./departures";
import { Directions } from "./directions";
import { Disruptions } from "./disruptions";
import { FareEstimate } from "./fareestimate";
import { Outlets } from "./outlets";
import { Patterns } from "./patterns";
import { RouteTypes } from "./routetypes";
import { Routes } from "./routes";
import { Runs } from "./runs";
import { Search } from "./search";
import { Stops } from "./stops";


export const ServerList = [
	"http://timetableapi.ptv.vic.gov.au",
	"https://timetableapi.ptv.vic.gov.au",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public departures: Departures;
  public directions: Directions;
  public disruptions: Disruptions;
  public fareEstimate: FareEstimate;
  public outlets: Outlets;
  public patterns: Patterns;
  public routeTypes: RouteTypes;
  public routes: Routes;
  public runs: Runs;
  public search: Search;
  public stops: Stops;

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
    
    this.departures = new Departures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.directions = new Directions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.disruptions = new Disruptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fareEstimate = new FareEstimate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.outlets = new Outlets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.patterns = new Patterns(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.routeTypes = new RouteTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.routes = new Routes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.runs = new Runs(
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
    
    this.stops = new Stops(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}