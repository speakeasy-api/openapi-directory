import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Accounts } from "./accounts";
import { BillingInfo } from "./billinginfo";
import { Budget } from "./budget";
import { Creatives } from "./creatives";
import { DirectDeals } from "./directdeals";
import { PerformanceReport } from "./performancereport";
import { PretargetingConfig } from "./pretargetingconfig";


export const ServerList = [
	"https://www.googleapis.com/adexchangebuyer/v1.3",
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
  public directDeals: DirectDeals;
  public performanceReport: PerformanceReport;
  public pretargetingConfig: PretargetingConfig;

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
    
    this.directDeals = new DirectDeals(
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
  }
}