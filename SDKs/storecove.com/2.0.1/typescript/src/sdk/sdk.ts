import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Administrations } from "./administrations";
import { Discovery } from "./discovery";
import { DocumentSubmissions } from "./documentsubmissions";
import { InvoiceSubmissions } from "./invoicesubmissions";
import { LegalEntities } from "./legalentities";
import { PeppolIdentifiers } from "./peppolidentifiers";
import { PurchaseInvoices } from "./purchaseinvoices";
import { WebhookInstances } from "./webhookinstances";


export const ServerList = [
	"https://api.storecove.com/api/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public administrations: Administrations;
  public discovery: Discovery;
  public documentSubmissions: DocumentSubmissions;
  public invoiceSubmissions: InvoiceSubmissions;
  public legalEntities: LegalEntities;
  public peppolIdentifiers: PeppolIdentifiers;
  public purchaseInvoices: PurchaseInvoices;
  public webhookInstances: WebhookInstances;

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
    
    this.administrations = new Administrations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.discovery = new Discovery(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.documentSubmissions = new DocumentSubmissions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoiceSubmissions = new InvoiceSubmissions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.legalEntities = new LegalEntities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.peppolIdentifiers = new PeppolIdentifiers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.purchaseInvoices = new PurchaseInvoices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webhookInstances = new WebhookInstances(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}