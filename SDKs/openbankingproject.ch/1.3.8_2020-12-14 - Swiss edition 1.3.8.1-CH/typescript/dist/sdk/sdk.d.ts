import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { AccountInformationServiceAis } from "./accountinformationserviceais";
import { CommonServices } from "./commonservices";
import { ConfirmationOfFundsServicePiis } from "./confirmationoffundsservicepiis";
import { PaymentInitiationServicePis } from "./paymentinitiationservicepis";
import { SigningBasketsServiceSbs } from "./signingbasketsservicesbs";
export declare const ServerList: readonly ["https://api.dev.openbankingproject.ch"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    accountInformationServiceAIS: AccountInformationServiceAis;
    commonServices: CommonServices;
    confirmationOfFundsServicePIIS: ConfirmationOfFundsServicePiis;
    paymentInitiationServicePIS: PaymentInitiationServicePis;
    signingBasketsServiceSBS: SigningBasketsServiceSbs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
