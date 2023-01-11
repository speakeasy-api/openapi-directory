import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AccountAccess } from "./accountaccess";
import { Accounts } from "./accounts";
import { Balances } from "./balances";
import { Beneficiaries } from "./beneficiaries";
import { Parties } from "./parties";
import { Sandbox } from "./sandbox";
import { ScheduledPayments } from "./scheduledpayments";
import { StandingOrders } from "./standingorders";
import { Statements } from "./statements";
import { Transactions } from "./transactions";


export const ServerList = [
	"https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5",
	"https://services.nbg.gr/apis/open-banking/v3.1.5/aisp",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public accountAccess: AccountAccess;
  public accounts: Accounts;
  public balances: Balances;
  public beneficiaries: Beneficiaries;
  public parties: Parties;
  public sandbox: Sandbox;
  public scheduledPayments: ScheduledPayments;
  public standingOrders: StandingOrders;
  public statements: Statements;
  public transactions: Transactions;

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
    
    this.accountAccess = new AccountAccess(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.balances = new Balances(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.beneficiaries = new Beneficiaries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.parties = new Parties(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sandbox = new Sandbox(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.scheduledPayments = new ScheduledPayments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.standingOrders = new StandingOrders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.statements = new Statements(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transactions = new Transactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}