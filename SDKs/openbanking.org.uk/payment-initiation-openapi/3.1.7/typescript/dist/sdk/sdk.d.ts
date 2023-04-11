import { DomesticPayments } from "./domesticpayments";
import { DomesticScheduledPayments } from "./domesticscheduledpayments";
import { DomesticStandingOrders } from "./domesticstandingorders";
import { FilePayments } from "./filepayments";
import { InternationalPayments } from "./internationalpayments";
import { InternationalScheduledPayments } from "./internationalscheduledpayments";
import { InternationalStandingOrders } from "./internationalstandingorders";
import { PaymentDetails } from "./paymentdetails";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://openbanking.org.uk", "/open-banking/v3.1/pisp"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Swagger for Payment Initiation API Specification
 */
export declare class SDK {
    domesticPayments: DomesticPayments;
    domesticScheduledPayments: DomesticScheduledPayments;
    domesticStandingOrders: DomesticStandingOrders;
    filePayments: FilePayments;
    internationalPayments: InternationalPayments;
    internationalScheduledPayments: InternationalScheduledPayments;
    internationalStandingOrders: InternationalStandingOrders;
    paymentDetails: PaymentDetails;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
