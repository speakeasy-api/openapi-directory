import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Addresses } from "./addresses";
import { Batches } from "./batches";
import { CarrierAccounts } from "./carrieraccounts";
import { Carriers } from "./carriers";
import { Downloads } from "./downloads";
import { Insurance } from "./insurance";
import { Labels } from "./labels";
import { Manifests } from "./manifests";
import { PackageTypes } from "./packagetypes";
import { Rates } from "./rates";
import { Shipments } from "./shipments";
import { Tags } from "./tags";
import { Tracking } from "./tracking";
import { Warehouses } from "./warehouses";
import { Webhooks } from "./webhooks";


export const ServerList = [
	"https://api.shipengine.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://www.shipengine.com/docs/ - ShipEngine's documentation is designed to help you start shipping as quickly as possible. With easy-to-follow tutorials, detailed reference docs, and ready-made recipes for common use cases, you'll see real results in no time at all.
 * */
export class SDK {
  public addresses: Addresses;
  public batches: Batches;
  public carrierAccounts: CarrierAccounts;
  public carriers: Carriers;
  public downloads: Downloads;
  public insurance: Insurance;
  public labels: Labels;
  public manifests: Manifests;
  public packageTypes: PackageTypes;
  public rates: Rates;
  public shipments: Shipments;
  public tags: Tags;
  public tracking: Tracking;
  public warehouses: Warehouses;
  public webhooks: Webhooks;

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
    
    this.addresses = new Addresses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.batches = new Batches(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.carrierAccounts = new CarrierAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.carriers = new Carriers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.downloads = new Downloads(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.insurance = new Insurance(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.labels = new Labels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.manifests = new Manifests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.packageTypes = new PackageTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rates = new Rates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.shipments = new Shipments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tags = new Tags(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tracking = new Tracking(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.warehouses = new Warehouses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}