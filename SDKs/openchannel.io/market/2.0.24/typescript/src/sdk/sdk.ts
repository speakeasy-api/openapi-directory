import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { AppsFindAndModifyApps } from "./appsfindandmodifyapps";
import { CustomGatewayProcessPaymentsAndRefunds } from "./customgatewayprocesspaymentsandrefunds";
import { DeveloperAccountsFindAndModifyDeveloperAccounts } from "./developeraccountsfindandmodifydeveloperaccounts";
import { DevelopersFindAndModifyDevelopers } from "./developersfindandmodifydevelopers";
import { EventsFindEvents } from "./eventsfindevents";
import { FilesUploadFiles } from "./filesuploadfiles";
import { MarketsThisMarketplace } from "./marketsthismarketplace";
import { OwnershipFindOwnership } from "./ownershipfindownership";
import { PermissionAddAndRemovePermissions } from "./permissionaddandremovepermissions";
import { ReviewsFindAndModifyReviews } from "./reviewsfindandmodifyreviews";
import { StatsFindMarketplaceStatistics } from "./statsfindmarketplacestatistics";
import { StripeGatewayProcessPaymentsAndRefunds } from "./stripegatewayprocesspaymentsandrefunds";
import { TransactionsFindPaymentsAndRefunds } from "./transactionsfindpaymentsandrefunds";
import { UserAccountsFindAndModifyUserAccounts } from "./useraccountsfindandmodifyuseraccounts";
import { UsersFindAndModifyUsers } from "./usersfindandmodifyusers";


export const ServerList = [
	"https://market.openchannel.io/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public appsFindAndModifyApps: AppsFindAndModifyApps;
  public customGatewayProcessPaymentsAndRefunds: CustomGatewayProcessPaymentsAndRefunds;
  public developerAccountsFindAndModifyDeveloperAccounts: DeveloperAccountsFindAndModifyDeveloperAccounts;
  public developersFindAndModifyDevelopers: DevelopersFindAndModifyDevelopers;
  public eventsFindEvents: EventsFindEvents;
  public filesUploadFiles: FilesUploadFiles;
  public marketsThisMarketplace: MarketsThisMarketplace;
  public ownershipFindOwnership: OwnershipFindOwnership;
  public permissionAddAndRemovePermissions: PermissionAddAndRemovePermissions;
  public reviewsFindAndModifyReviews: ReviewsFindAndModifyReviews;
  public statsFindMarketplaceStatistics: StatsFindMarketplaceStatistics;
  public stripeGatewayProcessPaymentsAndRefunds: StripeGatewayProcessPaymentsAndRefunds;
  public transactionsFindPaymentsAndRefunds: TransactionsFindPaymentsAndRefunds;
  public userAccountsFindAndModifyUserAccounts: UserAccountsFindAndModifyUserAccounts;
  public usersFindAndModifyUsers: UsersFindAndModifyUsers;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.appsFindAndModifyApps = new AppsFindAndModifyApps(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customGatewayProcessPaymentsAndRefunds = new CustomGatewayProcessPaymentsAndRefunds(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.developerAccountsFindAndModifyDeveloperAccounts = new DeveloperAccountsFindAndModifyDeveloperAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.developersFindAndModifyDevelopers = new DevelopersFindAndModifyDevelopers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.eventsFindEvents = new EventsFindEvents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.filesUploadFiles = new FilesUploadFiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketsThisMarketplace = new MarketsThisMarketplace(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ownershipFindOwnership = new OwnershipFindOwnership(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.permissionAddAndRemovePermissions = new PermissionAddAndRemovePermissions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.reviewsFindAndModifyReviews = new ReviewsFindAndModifyReviews(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.statsFindMarketplaceStatistics = new StatsFindMarketplaceStatistics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stripeGatewayProcessPaymentsAndRefunds = new StripeGatewayProcessPaymentsAndRefunds(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transactionsFindPaymentsAndRefunds = new TransactionsFindPaymentsAndRefunds(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userAccountsFindAndModifyUserAccounts = new UserAccountsFindAndModifyUserAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.usersFindAndModifyUsers = new UsersFindAndModifyUsers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}