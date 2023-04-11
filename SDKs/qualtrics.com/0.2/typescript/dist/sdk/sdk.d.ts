import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://fra1.qualtrics.com/API/v3"];
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
 * Work with Qualtrics surveys, distributions and response events
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create contact in mailing list
     *
     * @remarks
     * Creates a contact in a given mailing list
     */
    createContactInMailinglist(req: operations.CreateContactInMailinglistRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactInMailinglistResponse>;
    /**
     * Generate distribution links
     *
     * @remarks
     * Geneates links for individual distribution
     */
    generateDistributionLinks(req: shared.CreateDistributionLinks, config?: AxiosRequestConfig): Promise<operations.GenerateDistributionLinksResponse>;
    /**
     * Get distributions for survey
     *
     * @remarks
     * Gets all distributions for a given survey
     */
    getDistributions(req: operations.GetDistributionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsResponse>;
    /**
     * Get event subscriptions
     *
     * @remarks
     * Get event subscriptions
     */
    getEventSubscriptions(req: operations.GetEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventSubscriptionsResponse>;
    /**
     * Get survey
     *
     * @remarks
     * Gets a single Qualtrics survey speficied by its ID
     */
    getSurvey(req: operations.GetSurveyRequest, config?: AxiosRequestConfig): Promise<operations.GetSurveyResponse>;
    /**
     * Retrieve distribution links
     *
     * @remarks
     * Retrieves all the individual links for a given distribution
     */
    retrievedistributionlinks(req: operations.RetrievedistributionlinksRequest, config?: AxiosRequestConfig): Promise<operations.RetrievedistributionlinksResponse>;
    /**
     * Remove subscription to response event
     *
     * @remarks
     * Remove event subscription
     */
    webhookDelete(req: shared.SubscribeToEventBody, config?: AxiosRequestConfig): Promise<operations.WebhookDeleteResponse>;
    /**
     * Triggers when a response is submitted to a qualtrics survey
     *
     * @remarks
     * Subscribe to response event
     */
    whenAResponseIsReceived(req: shared.SubscribeToEventBody, config?: AxiosRequestConfig): Promise<operations.WhenAResponseIsReceivedResponse>;
}
