import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { DistrictsInRegion } from "./districtsinregion";
import { StreetsInAWard } from "./streetsinaward";
import { TanzaniaRegions } from "./tanzaniaregions";
import { WardsInADistrict } from "./wardsinadistrict";
import { NeighborhoodInAStreet } from "./neighborhoodinastreet";


export const ServerList = [
	"https://mtaa-api.herokuapp.com/api",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public districtsInRegion: DistrictsInRegion;
  public streetsInAWard: StreetsInAWard;
  public tanzaniaRegions: TanzaniaRegions;
  public wardsInADistrict: WardsInADistrict;
  public neighborhoodInAStreet: NeighborhoodInAStreet;

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
    
    this.districtsInRegion = new DistrictsInRegion(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.streetsInAWard = new StreetsInAWard(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tanzaniaRegions = new TanzaniaRegions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.wardsInADistrict = new WardsInADistrict(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.neighborhoodInAStreet = new NeighborhoodInAStreet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}