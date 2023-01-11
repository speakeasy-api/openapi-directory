import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Accounts } from "./accounts";
import { BillingInfo } from "./billinginfo";
import { Budget } from "./budget";
import { Creatives } from "./creatives";
import { Marketplacedeals } from "./marketplacedeals";
import { Marketplacenotes } from "./marketplacenotes";
import { Marketplaceprivateauction } from "./marketplaceprivateauction";
import { PerformanceReport } from "./performancereport";
import { PretargetingConfig } from "./pretargetingconfig";
import { Products } from "./products";
import { Proposals } from "./proposals";
import { Pubprofiles } from "./pubprofiles";


export const ServerList = [
	"https://www.googleapis.com/adexchangebuyer/v1.4",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.google.com/ad-exchange/buyer-rest*/
export class SDK {
  public accounts: Accounts;
  public billingInfo: BillingInfo;
  public budget: Budget;
  public creatives: Creatives;
  public marketplacedeals: Marketplacedeals;
  public marketplacenotes: Marketplacenotes;
  public marketplaceprivateauction: Marketplaceprivateauction;
  public performanceReport: PerformanceReport;
  public pretargetingConfig: PretargetingConfig;
  public products: Products;
  public proposals: Proposals;
  public pubprofiles: Pubprofiles;

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
    
    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billingInfo = new BillingInfo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.budget = new Budget(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.creatives = new Creatives(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacedeals = new Marketplacedeals(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacenotes = new Marketplacenotes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplaceprivateauction = new Marketplaceprivateauction(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.performanceReport = new PerformanceReport(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pretargetingConfig = new PretargetingConfig(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.products = new Products(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.proposals = new Proposals(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pubprofiles = new Pubprofiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}