import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Applications } from "./applications";
import { Edits } from "./edits";
import { Generatedapks } from "./generatedapks";
import { Grants } from "./grants";
import { Inappproducts } from "./inappproducts";
import { Internalappsharingartifacts } from "./internalappsharingartifacts";
import { Monetization } from "./monetization";
import { Orders } from "./orders";
import { Purchases } from "./purchases";
import { Reviews } from "./reviews";
import { Systemapks } from "./systemapks";
import { Users } from "./users";


export const ServerList = [
	"https://androidpublisher.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.google.com/android-publisher*/
export class SDK {
  public applications: Applications;
  public edits: Edits;
  public generatedapks: Generatedapks;
  public grants: Grants;
  public inappproducts: Inappproducts;
  public internalappsharingartifacts: Internalappsharingartifacts;
  public monetization: Monetization;
  public orders: Orders;
  public purchases: Purchases;
  public reviews: Reviews;
  public systemapks: Systemapks;
  public users: Users;

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
    
    this.applications = new Applications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.edits = new Edits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.generatedapks = new Generatedapks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.grants = new Grants(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.inappproducts = new Inappproducts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.internalappsharingartifacts = new Internalappsharingartifacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.monetization = new Monetization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orders = new Orders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.purchases = new Purchases(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.reviews = new Reviews(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.systemapks = new Systemapks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}