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
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/adexchangebuyer/v1.4"];
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
 * Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
 *
 * @see {@link https://developers.google.com/ad-exchange/buyer-rest}
 */
export declare class SDK {
    accounts: Accounts;
    billingInfo: BillingInfo;
    budget: Budget;
    creatives: Creatives;
    marketplacedeals: Marketplacedeals;
    marketplacenotes: Marketplacenotes;
    marketplaceprivateauction: Marketplaceprivateauction;
    performanceReport: PerformanceReport;
    pretargetingConfig: PretargetingConfig;
    products: Products;
    proposals: Proposals;
    pubprofiles: Pubprofiles;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
