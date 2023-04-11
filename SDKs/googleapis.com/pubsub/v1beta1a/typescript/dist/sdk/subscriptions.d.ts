import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
     */
    pubsubSubscriptionsAcknowledge(req: operations.PubsubSubscriptionsAcknowledgeRequest, security: operations.PubsubSubscriptionsAcknowledgeSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsAcknowledgeResponse>;
    /**
     * Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
     */
    pubsubSubscriptionsCreate(req: operations.PubsubSubscriptionsCreateRequest, security: operations.PubsubSubscriptionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsCreateResponse>;
    /**
     * Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
     */
    pubsubSubscriptionsDelete(req: operations.PubsubSubscriptionsDeleteRequest, security: operations.PubsubSubscriptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsDeleteResponse>;
    /**
     * Gets the configuration details of a subscription.
     */
    pubsubSubscriptionsGet(req: operations.PubsubSubscriptionsGetRequest, security: operations.PubsubSubscriptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsGetResponse>;
    /**
     * Lists matching subscriptions.
     */
    pubsubSubscriptionsList(req: operations.PubsubSubscriptionsListRequest, security: operations.PubsubSubscriptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsListResponse>;
    /**
     * Modifies the Ack deadline for a message received from a pull request.
     */
    pubsubSubscriptionsModifyAckDeadline(req: operations.PubsubSubscriptionsModifyAckDeadlineRequest, security: operations.PubsubSubscriptionsModifyAckDeadlineSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsModifyAckDeadlineResponse>;
    /**
     * Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
     */
    pubsubSubscriptionsModifyPushConfig(req: operations.PubsubSubscriptionsModifyPushConfigRequest, security: operations.PubsubSubscriptionsModifyPushConfigSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsModifyPushConfigResponse>;
    /**
     * Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
     */
    pubsubSubscriptionsPull(req: operations.PubsubSubscriptionsPullRequest, security: operations.PubsubSubscriptionsPullSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsPullResponse>;
    /**
     * Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.
     */
    pubsubSubscriptionsPullBatch(req: operations.PubsubSubscriptionsPullBatchRequest, security: operations.PubsubSubscriptionsPullBatchSecurity, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsPullBatchResponse>;
}
