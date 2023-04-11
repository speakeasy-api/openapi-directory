import { Accounts } from "./accounts";
import { Accountstatuses } from "./accountstatuses";
import { Accounttax } from "./accounttax";
import { Datafeeds } from "./datafeeds";
import { Datafeedstatuses } from "./datafeedstatuses";
import { Liasettings } from "./liasettings";
import { Orderinvoices } from "./orderinvoices";
import { Orderreports } from "./orderreports";
import { Orderreturns } from "./orderreturns";
import { Orders } from "./orders";
import { Pos } from "./pos";
import { Products } from "./products";
import { Productstatuses } from "./productstatuses";
import { Shippingsettings } from "./shippingsettings";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://shoppingcontent.googleapis.com/content/v2"];
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
    datafeeds: Datafeeds;
    datafeedstatuses: Datafeedstatuses;
    liasettings: Liasettings;
    orderinvoices: Orderinvoices;
    orderreports: Orderreports;
    orderreturns: Orderreturns;
    orders: Orders;
    pos: Pos;
    products: Products;
    productstatuses: Productstatuses;
    shippingsettings: Shippingsettings;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
