import { Accounts } from "./accounts";
import { Attachments } from "./attachments";
import { Budgeting } from "./budgeting";
import { Categories } from "./categories";
import { CategoryRules } from "./categoryrules";
import { Currencies } from "./currencies";
import { Events } from "./events";
import { Institutions } from "./institutions";
import { Labels } from "./labels";
import * as shared from "./models/shared";
import { SavedSearches } from "./savedsearches";
import { TimeZones } from "./timezones";
import { TransactionAccounts } from "./transactionaccounts";
import { Transactions } from "./transactions";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.pocketsmith.com/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * The PocketSmith API
 */
export declare class SDK {
    accounts: Accounts;
    attachments: Attachments;
    budgeting: Budgeting;
    categories: Categories;
    categoryRules: CategoryRules;
    currencies: Currencies;
    events: Events;
    institutions: Institutions;
    labels: Labels;
    savedSearches: SavedSearches;
    timeZones: TimeZones;
    transactionAccounts: TransactionAccounts;
    transactions: Transactions;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
