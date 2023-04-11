import { Accounts } from "./accounts";
import { Accountstatuses } from "./accountstatuses";
import { Accounttax } from "./accounttax";
import { Buyongoogleprograms } from "./buyongoogleprograms";
import { Collections } from "./collections";
import { Collectionstatuses } from "./collectionstatuses";
import { Conversionsources } from "./conversionsources";
import { Csses } from "./csses";
import { Datafeeds } from "./datafeeds";
import { Datafeedstatuses } from "./datafeedstatuses";
import { Freelistingsprogram } from "./freelistingsprogram";
import { Liasettings } from "./liasettings";
import { Localinventory } from "./localinventory";
import { Orderinvoices } from "./orderinvoices";
import { Orderreports } from "./orderreports";
import { Orderreturns } from "./orderreturns";
import { Orders } from "./orders";
import { Ordertrackingsignals } from "./ordertrackingsignals";
import { Pos } from "./pos";
import { Productdeliverytime } from "./productdeliverytime";
import { Products } from "./products";
import { Productstatuses } from "./productstatuses";
import { Promotions } from "./promotions";
import { Pubsubnotificationsettings } from "./pubsubnotificationsettings";
import { Quotas } from "./quotas";
import { Regionalinventory } from "./regionalinventory";
import { Regions } from "./regions";
import { Reports } from "./reports";
import { Repricingrules } from "./repricingrules";
import { Returnaddress } from "./returnaddress";
import { Returnpolicy } from "./returnpolicy";
import { Returnpolicyonline } from "./returnpolicyonline";
import { Settlementreports } from "./settlementreports";
import { Settlementtransactions } from "./settlementtransactions";
import { Shippingsettings } from "./shippingsettings";
import { Shoppingadsprogram } from "./shoppingadsprogram";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://shoppingcontent.googleapis.com/content/v2.1"];
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
 * Manage your product listings and accounts for Google Shopping
 *
 * @see {@link https://developers.google.com/shopping-content/v2/}
 */
export declare class SDK {
    accounts: Accounts;
    accountstatuses: Accountstatuses;
    accounttax: Accounttax;
    buyongoogleprograms: Buyongoogleprograms;
    collections: Collections;
    collectionstatuses: Collectionstatuses;
    conversionsources: Conversionsources;
    csses: Csses;
    datafeeds: Datafeeds;
    datafeedstatuses: Datafeedstatuses;
    freelistingsprogram: Freelistingsprogram;
    liasettings: Liasettings;
    localinventory: Localinventory;
    orderinvoices: Orderinvoices;
    orderreports: Orderreports;
    orderreturns: Orderreturns;
    orders: Orders;
    ordertrackingsignals: Ordertrackingsignals;
    pos: Pos;
    productdeliverytime: Productdeliverytime;
    products: Products;
    productstatuses: Productstatuses;
    promotions: Promotions;
    pubsubnotificationsettings: Pubsubnotificationsettings;
    quotas: Quotas;
    regionalinventory: Regionalinventory;
    regions: Regions;
    reports: Reports;
    repricingrules: Repricingrules;
    returnaddress: Returnaddress;
    returnpolicy: Returnpolicy;
    returnpolicyonline: Returnpolicyonline;
    settlementreports: Settlementreports;
    settlementtransactions: Settlementtransactions;
    shippingsettings: Shippingsettings;
    shoppingadsprogram: Shoppingadsprogram;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
