import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class User extends SpeakeasyBase {
    /**
     * Whether the user wants to see all accounts in their base currency instead of the native account currency.
     */
    alwaysShowBaseCurrency?: boolean;
    /**
     * The user's total number of available accounts.
     */
    availableAccounts?: number;
    /**
     * The user's total number of available budgets.
     */
    availableBudgets?: number;
    /**
     * The URL to the user's avatar.
     */
    avatarUrl?: string;
    /**
     * The user's base currency.
     */
    baseCurrencyCode?: string;
    /**
     * Whether the user has opted in to beta features.
     */
    betaUser?: boolean;
    /**
     * When the user signed up.
     */
    createdAt?: string;
    /**
     * The user's email address.
     */
    email?: string;
    /**
     * Whether the user's forecast recalculation should be deferred.
     */
    forecastDeferRecalculate?: boolean;
    /**
     * The date that the user's forecast ends.
     */
    forecastEndDate?: string;
    /**
     * When the user's forecast was last accessed.
     */
    forecastLastAccessedAt?: string;
    /**
     * When the user's forecast was last updated.
     */
    forecastLastUpdatedAt?: string;
    /**
     * Whether the user's forecast needs to be recalculated.
     */
    forecastNeedsRecalculate?: boolean;
    /**
     * The date that the user's forecast starts.
     */
    forecastStartDate?: string;
    /**
     * The unique identifier of the user.
     */
    id?: number;
    /**
     * Whether the user wants to review new transactions, transfer transactions or categorisation.
     */
    isReviewingTransactions?: boolean;
    /**
     * When the user last interacted with PocketSmith, via any application or the API.
     */
    lastActivityAt?: string;
    /**
     * When the user last logged into PocketSmith.
     */
    lastLoggedInAt?: string;
    /**
     * The user's username.
     */
    login?: string;
    /**
     * The full name of the user, although not all users will have a name set.
     */
    name?: string;
    /**
     * The user's time zone.
     */
    timeZone?: string;
    /**
     * When the user was last updated.
     */
    updatedAt?: string;
    /**
     * Whether the user has multiple currencies in use across their account.
     */
    usingMultipleCurrencies?: boolean;
    /**
     * The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.
     */
    weekStartDay?: number;
}
