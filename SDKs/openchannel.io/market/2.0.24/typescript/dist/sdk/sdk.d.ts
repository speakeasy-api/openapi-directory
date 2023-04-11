import { AppsFindAndModifyApps } from "./appsfindandmodifyapps";
import { CustomGatewayProcessPaymentsAndRefunds } from "./customgatewayprocesspaymentsandrefunds";
import { DeveloperAccountsFindAndModifyDeveloperAccounts } from "./developeraccountsfindandmodifydeveloperaccounts";
import { DevelopersFindAndModifyDevelopers } from "./developersfindandmodifydevelopers";
import { EventsFindEvents } from "./eventsfindevents";
import { FilesUploadFiles } from "./filesuploadfiles";
import { MarketsThisMarketplace } from "./marketsthismarketplace";
import * as shared from "./models/shared";
import { OwnershipFindOwnership } from "./ownershipfindownership";
import { PermissionAddAndRemovePermissions } from "./permissionaddandremovepermissions";
import { ReviewsFindAndModifyReviews } from "./reviewsfindandmodifyreviews";
import { StatsFindMarketplaceStatistics } from "./statsfindmarketplacestatistics";
import { StripeGatewayProcessPaymentsAndRefunds } from "./stripegatewayprocesspaymentsandrefunds";
import { TransactionsFindPaymentsAndRefunds } from "./transactionsfindpaymentsandrefunds";
import { UserAccountsFindAndModifyUserAccounts } from "./useraccountsfindandmodifyuseraccounts";
import { UsersFindAndModifyUsers } from "./usersfindandmodifyusers";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://market.openchannel.io/v2"];
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
export declare class SDK {
    appsFindAndModifyApps: AppsFindAndModifyApps;
    customGatewayProcessPaymentsAndRefunds: CustomGatewayProcessPaymentsAndRefunds;
    developerAccountsFindAndModifyDeveloperAccounts: DeveloperAccountsFindAndModifyDeveloperAccounts;
    developersFindAndModifyDevelopers: DevelopersFindAndModifyDevelopers;
    eventsFindEvents: EventsFindEvents;
    filesUploadFiles: FilesUploadFiles;
    marketsThisMarketplace: MarketsThisMarketplace;
    ownershipFindOwnership: OwnershipFindOwnership;
    permissionAddAndRemovePermissions: PermissionAddAndRemovePermissions;
    reviewsFindAndModifyReviews: ReviewsFindAndModifyReviews;
    statsFindMarketplaceStatistics: StatsFindMarketplaceStatistics;
    stripeGatewayProcessPaymentsAndRefunds: StripeGatewayProcessPaymentsAndRefunds;
    transactionsFindPaymentsAndRefunds: TransactionsFindPaymentsAndRefunds;
    userAccountsFindAndModifyUserAccounts: UserAccountsFindAndModifyUserAccounts;
    usersFindAndModifyUsers: UsersFindAndModifyUsers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
