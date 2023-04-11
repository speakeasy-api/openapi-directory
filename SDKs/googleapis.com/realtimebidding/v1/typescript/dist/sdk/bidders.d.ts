import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Bidders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
     */
    realtimebiddingBiddersCreativesWatch(req: operations.RealtimebiddingBiddersCreativesWatchRequest, security: operations.RealtimebiddingBiddersCreativesWatchSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersCreativesWatchResponse>;
    /**
     * Lists all the bidder's endpoints.
     */
    realtimebiddingBiddersEndpointsList(req: operations.RealtimebiddingBiddersEndpointsListRequest, security: operations.RealtimebiddingBiddersEndpointsListSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersEndpointsListResponse>;
    /**
     * Lists all the bidder accounts that belong to the caller.
     */
    realtimebiddingBiddersList(req: operations.RealtimebiddingBiddersListRequest, security: operations.RealtimebiddingBiddersListSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersListResponse>;
    /**
     * Activates a pretargeting configuration.
     */
    realtimebiddingBiddersPretargetingConfigsActivate(req: operations.RealtimebiddingBiddersPretargetingConfigsActivateRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsActivateSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsActivateResponse>;
    /**
     * Adds targeted apps to the pretargeting configuration.
     */
    realtimebiddingBiddersPretargetingConfigsAddTargetedApps(req: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse>;
    /**
     * Adds targeted publishers to the pretargeting config.
     */
    realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers(req: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse>;
    /**
     * Adds targeted sites to the pretargeting configuration.
     */
    realtimebiddingBiddersPretargetingConfigsAddTargetedSites(req: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse>;
    /**
     * Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
     */
    realtimebiddingBiddersPretargetingConfigsCreate(req: operations.RealtimebiddingBiddersPretargetingConfigsCreateRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsCreateResponse>;
    /**
     * Deletes a pretargeting configuration.
     */
    realtimebiddingBiddersPretargetingConfigsDelete(req: operations.RealtimebiddingBiddersPretargetingConfigsDeleteRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsDeleteResponse>;
    /**
     * Lists all pretargeting configurations for a single bidder.
     */
    realtimebiddingBiddersPretargetingConfigsList(req: operations.RealtimebiddingBiddersPretargetingConfigsListRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsListResponse>;
    /**
     * Removes targeted apps from the pretargeting configuration.
     */
    realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps(req: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse>;
    /**
     * Removes targeted publishers from the pretargeting config.
     */
    realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers(req: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse>;
    /**
     * Removes targeted sites from the pretargeting configuration.
     */
    realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites(req: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse>;
    /**
     * Suspends a pretargeting configuration.
     */
    realtimebiddingBiddersPretargetingConfigsSuspend(req: operations.RealtimebiddingBiddersPretargetingConfigsSuspendRequest, security: operations.RealtimebiddingBiddersPretargetingConfigsSuspendSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPretargetingConfigsSuspendResponse>;
    /**
     * Batch approves multiple publisher connections.
     */
    realtimebiddingBiddersPublisherConnectionsBatchApprove(req: operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest, security: operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse>;
    /**
     * Batch rejects multiple publisher connections.
     */
    realtimebiddingBiddersPublisherConnectionsBatchReject(req: operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest, security: operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse>;
    /**
     * Lists publisher connections for a given bidder.
     */
    realtimebiddingBiddersPublisherConnectionsList(req: operations.RealtimebiddingBiddersPublisherConnectionsListRequest, security: operations.RealtimebiddingBiddersPublisherConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersPublisherConnectionsListResponse>;
}
