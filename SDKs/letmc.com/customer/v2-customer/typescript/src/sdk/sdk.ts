import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { BranchController } from "./branchcontroller";
import { LandlordController } from "./landlordcontroller";
import { PhotoController } from "./photocontroller";
import { PropertyController } from "./propertycontroller";
import { SessionController } from "./sessioncontroller";


export const ServerList = [
	"https://live-api.letmc.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public branchController: BranchController;
  public landlordController: LandlordController;
  public photoController: PhotoController;
  public propertyController: PropertyController;
  public sessionController: SessionController;

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
    
    this.branchController = new BranchController(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.landlordController = new LandlordController(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.photoController = new PhotoController(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.propertyController = new PropertyController(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sessionController = new SessionController(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}