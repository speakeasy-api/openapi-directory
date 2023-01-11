import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Countries } from "./countries";
import { Currencies } from "./currencies";
import { FundingManager } from "./fundingmanager";
import { FundingManagerPrivate } from "./fundingmanagerprivate";
import { Login } from "./login";
import { PayeeInvitation } from "./payeeinvitation";
import { Payees } from "./payees";
import { PaymentAuditService } from "./paymentauditservice";
import { PaymentAuditServiceDeprecated } from "./paymentauditservicedeprecated";
import { Payors } from "./payors";
import { PayorsPrivate } from "./payorsprivate";
import { PayoutService } from "./payoutservice";
import { Tokens } from "./tokens";
import { Users } from "./users";
import { Webhooks } from "./webhooks";


export const ServerList = [
	"https://api.sandbox.velopayments.com/",
	"https://api.payouts.velopayments.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public countries: Countries;
  public currencies: Currencies;
  public fundingManager: FundingManager;
  public fundingManagerPrivate: FundingManagerPrivate;
  public login: Login;
  public payeeInvitation: PayeeInvitation;
  public payees: Payees;
  public paymentAuditService: PaymentAuditService;
  public paymentAuditServiceDeprecated: PaymentAuditServiceDeprecated;
  public payors: Payors;
  public payorsPrivate: PayorsPrivate;
  public payoutService: PayoutService;
  public tokens: Tokens;
  public users: Users;
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
    
    this.countries = new Countries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.currencies = new Currencies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fundingManager = new FundingManager(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fundingManagerPrivate = new FundingManagerPrivate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.login = new Login(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payeeInvitation = new PayeeInvitation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payees = new Payees(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentAuditService = new PaymentAuditService(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentAuditServiceDeprecated = new PaymentAuditServiceDeprecated(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payors = new Payors(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payorsPrivate = new PayorsPrivate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payoutService = new PayoutService(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tokens = new Tokens(
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