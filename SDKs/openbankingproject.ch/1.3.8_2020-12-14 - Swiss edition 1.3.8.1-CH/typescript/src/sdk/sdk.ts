import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { AccountInformationServiceAis } from "./accountinformationserviceais";
import { CommonServices } from "./commonservices";
import { ConfirmationOfFundsServicePiis } from "./confirmationoffundsservicepiis";
import { PaymentInitiationServicePis } from "./paymentinitiationservicepis";
import { SigningBasketsServiceSbs } from "./signingbasketsservicesbs";


export const ServerList = [
	"https://api.dev.openbankingproject.ch",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://github.com/openbankingproject-ch/obp-apis - Full Documentation of NextGen Access to Account Interoperability Framework
 * (General Introduction Paper, Operational Rules, Implementation Guidelines)
 * */
export class SDK {
  public accountInformationServiceAIS: AccountInformationServiceAis;
  public commonServices: CommonServices;
  public confirmationOfFundsServicePIIS: ConfirmationOfFundsServicePiis;
  public paymentInitiationServicePIS: PaymentInitiationServicePis;
  public signingBasketsServiceSBS: SigningBasketsServiceSbs;

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
    
    this.accountInformationServiceAIS = new AccountInformationServiceAis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commonServices = new CommonServices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.confirmationOfFundsServicePIIS = new ConfirmationOfFundsServicePiis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentInitiationServicePIS = new PaymentInitiationServicePis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.signingBasketsServiceSBS = new SigningBasketsServiceSbs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}