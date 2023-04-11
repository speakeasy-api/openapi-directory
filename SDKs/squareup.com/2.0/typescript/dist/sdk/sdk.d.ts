import { ApplePay } from "./applepay";
import { BankAccounts } from "./bankaccounts";
import { Bookings } from "./bookings";
import { Cards } from "./cards";
import { CashDrawers } from "./cashdrawers";
import { Catalog } from "./catalog";
import { Checkout } from "./checkout";
import { CustomerGroups } from "./customergroups";
import { Customers } from "./customers";
import { CustomerSegments } from "./customersegments";
import { Devices } from "./devices";
import { Disputes } from "./disputes";
import { Employees } from "./employees";
import { GiftCardActivities } from "./giftcardactivities";
import { GiftCards } from "./giftcards";
import { Inventory } from "./inventory";
import { Invoices } from "./invoices";
import { Labor } from "./labor";
import { Locations } from "./locations";
import { Loyalty } from "./loyalty";
import { Merchants } from "./merchants";
import { MobileAuthorization } from "./mobileauthorization";
import { OAuth } from "./oauth";
import { Orders } from "./orders";
import { Payments } from "./payments";
import { Refunds } from "./refunds";
import { Sites } from "./sites";
import { Snippets } from "./snippets";
import { Subscriptions } from "./subscriptions";
import { Team } from "./team";
import { Terminal } from "./terminal";
import { Transactions } from "./transactions";
import { V1Employees } from "./v1employees";
import { V1Transactions } from "./v1transactions";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://connect.squareup.com"];
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
 * Client library for accessing the Square Connect APIs
 *
 * @see {@link https://docs.connect.squareup.com/} - Read the official documentation here:
 */
export declare class SDK {
    applePay: ApplePay;
    bankAccounts: BankAccounts;
    bookings: Bookings;
    cards: Cards;
    cashDrawers: CashDrawers;
    catalog: Catalog;
    checkout: Checkout;
    customerGroups: CustomerGroups;
    customerSegments: CustomerSegments;
    customers: Customers;
    devices: Devices;
    disputes: Disputes;
    employees: Employees;
    giftCardActivities: GiftCardActivities;
    giftCards: GiftCards;
    inventory: Inventory;
    invoices: Invoices;
    labor: Labor;
    locations: Locations;
    loyalty: Loyalty;
    merchants: Merchants;
    mobileAuthorization: MobileAuthorization;
    oAuth: OAuth;
    orders: Orders;
    payments: Payments;
    refunds: Refunds;
    sites: Sites;
    snippets: Snippets;
    subscriptions: Subscriptions;
    team: Team;
    terminal: Terminal;
    transactions: Transactions;
    v1Employees: V1Employees;
    v1Transactions: V1Transactions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
