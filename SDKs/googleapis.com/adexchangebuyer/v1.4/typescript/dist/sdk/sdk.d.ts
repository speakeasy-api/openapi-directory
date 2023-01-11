import { AxiosInstance } from "axios";
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
export declare const ServerList: readonly ["https://www.googleapis.com/adexchangebuyer/v1.4"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
