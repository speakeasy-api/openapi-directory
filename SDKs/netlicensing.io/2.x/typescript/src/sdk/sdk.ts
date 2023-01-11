import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { License } from "./license";
import { LicenseTemplate } from "./licensetemplate";
import { Licensee } from "./licensee";
import { PaymentMethod } from "./paymentmethod";
import { Product } from "./product";
import { ProductModule } from "./productmodule";
import { Token } from "./token";
import { Transaction } from "./transaction";
import { Utility } from "./utility";


export const ServerList = [
	"https://go.netlicensing.io/core/v2/rest",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public license: License;
  public licenseTemplate: LicenseTemplate;
  public licensee: Licensee;
  public paymentMethod: PaymentMethod;
  public product: Product;
  public productModule: ProductModule;
  public token: Token;
  public transaction: Transaction;
  public utility: Utility;

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
    
    this.license = new License(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.licenseTemplate = new LicenseTemplate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.licensee = new Licensee(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentMethod = new PaymentMethod(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.product = new Product(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.productModule = new ProductModule(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.token = new Token(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transaction = new Transaction(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.utility = new Utility(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}