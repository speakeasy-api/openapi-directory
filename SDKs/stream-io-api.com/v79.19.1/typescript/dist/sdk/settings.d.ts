import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check push
     *
     * @remarks
     * Sends a test message via push, this is a test endpoint to verify your push settings
     */
    checkPush(req: shared.CheckPushRequest, config?: AxiosRequestConfig): Promise<operations.CheckPushResponse>;
    /**
     * Check SQS
     *
     * @remarks
     * Validates Amazon SQS credentials
     */
    checkSQS(req: shared.CheckSQSRequest, config?: AxiosRequestConfig): Promise<operations.CheckSQSResponse>;
    /**
     * Create block list
     *
     * @remarks
     * Creates a new application blocklist, once created the blocklist can be used by any channel type
     */
    createBlockList(req: shared.CreateBlockListRequest, config?: AxiosRequestConfig): Promise<operations.CreateBlockListResponse>;
    /**
     * Create channel type
     *
     * @remarks
     * Creates new channel type
     */
    createChannelType(req: shared.CreateChannelTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelTypeResponse>;
    /**
     * Get App Settings
     *
     * @remarks
     * This method returns the application settings
     */
    getApp(config?: AxiosRequestConfig): Promise<operations.GetAppResponse>;
    /**
     * Get rate limits
     *
     * @remarks
     * Get rate limits usage and quotas
     */
    getRateLimits(req: operations.GetRateLimitsRequest, config?: AxiosRequestConfig): Promise<operations.GetRateLimitsResponse>;
    /**
     * List block lists
     *
     * @remarks
     * Returns all available block lists
     */
    listBlockLists(config?: AxiosRequestConfig): Promise<operations.ListBlockListsResponse>;
    /**
     * List channel types
     *
     * @remarks
     * Lists all available channel types
     */
    listChannelTypes(config?: AxiosRequestConfig): Promise<operations.ListChannelTypesResponse>;
    /**
     * List push providers
     *
     * @remarks
     * List details of all push providers.
     */
    listPushProviders(config?: AxiosRequestConfig): Promise<operations.ListPushProvidersResponse>;
    /**
     * Update App Settings
     *
     * @remarks
     * This method updates one or more application settings
     */
    updateApp(req: shared.UpdateAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppResponse>;
    /**
     * Upsert a push provider
     *
     * @remarks
     * Upsert a push provider for v2 with multi bundle/package support
     */
    upsertPushProvider(req: shared.UpsertPushProviderRequest, config?: AxiosRequestConfig): Promise<operations.UpsertPushProviderResponse>;
}
