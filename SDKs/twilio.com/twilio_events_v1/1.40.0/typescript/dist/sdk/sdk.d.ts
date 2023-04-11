import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://events.twilio.com"];
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
 * This is the public Twilio REST API.
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
     * Create a new Sink
     */
    createSink(req: operations.CreateSinkCreateSinkRequest, security: operations.CreateSinkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSinkResponse>;
    /**
     * Create a new Sink Test Event for the given Sink.
     */
    createSinkTest(req: operations.CreateSinkTestRequest, security: operations.CreateSinkTestSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSinkTestResponse>;
    /**
     * Validate that a test event for a Sink was received.
     */
    createSinkValidate(req: operations.CreateSinkValidateRequest, security: operations.CreateSinkValidateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSinkValidateResponse>;
    /**
     * Create a new Subscribed Event type for the subscription
     */
    createSubscribedEvent(req: operations.CreateSubscribedEventRequest, security: operations.CreateSubscribedEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSubscribedEventResponse>;
    /**
     * Create a new Subscription.
     */
    createSubscription(req: operations.CreateSubscriptionCreateSubscriptionRequest, security: operations.CreateSubscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionResponse>;
    /**
     * Delete a specific Sink.
     */
    deleteSink(req: operations.DeleteSinkRequest, security: operations.DeleteSinkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSinkResponse>;
    /**
     * Remove an event type from a subscription.
     */
    deleteSubscribedEvent(req: operations.DeleteSubscribedEventRequest, security: operations.DeleteSubscribedEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSubscribedEventResponse>;
    /**
     * Delete a specific Subscription.
     */
    deleteSubscription(req: operations.DeleteSubscriptionRequest, security: operations.DeleteSubscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionResponse>;
    /**
     * Fetch a specific Event Type.
     */
    fetchEventType(req: operations.FetchEventTypeRequest, security: operations.FetchEventTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEventTypeResponse>;
    /**
     * Fetch a specific schema with its nested versions.
     */
    fetchSchema(req: operations.FetchSchemaRequest, security: operations.FetchSchemaSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSchemaResponse>;
    /**
     * Fetch a specific schema and version.
     */
    fetchSchemaVersion(req: operations.FetchSchemaVersionRequest, security: operations.FetchSchemaVersionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSchemaVersionResponse>;
    /**
     * Fetch a specific Sink.
     */
    fetchSink(req: operations.FetchSinkRequest, security: operations.FetchSinkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSinkResponse>;
    /**
     * Read an Event for a Subscription.
     */
    fetchSubscribedEvent(req: operations.FetchSubscribedEventRequest, security: operations.FetchSubscribedEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSubscribedEventResponse>;
    /**
     * Fetch a specific Subscription.
     */
    fetchSubscription(req: operations.FetchSubscriptionRequest, security: operations.FetchSubscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSubscriptionResponse>;
    /**
     * Retrieve a paginated list of all the available Event Types.
     */
    listEventType(req: operations.ListEventTypeRequest, security: operations.ListEventTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEventTypeResponse>;
    /**
     * Retrieve a paginated list of versions of the schema.
     */
    listSchemaVersion(req: operations.ListSchemaVersionRequest, security: operations.ListSchemaVersionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSchemaVersionResponse>;
    /**
     * Retrieve a paginated list of Sinks belonging to the account used to make the request.
     */
    listSink(req: operations.ListSinkRequest, security: operations.ListSinkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSinkResponse>;
    /**
     * Retrieve a list of all Subscribed Event types for a Subscription.
     */
    listSubscribedEvent(req: operations.ListSubscribedEventRequest, security: operations.ListSubscribedEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSubscribedEventResponse>;
    /**
     * Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
     */
    listSubscription(req: operations.ListSubscriptionRequest, security: operations.ListSubscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSubscriptionResponse>;
    /**
     * Update a specific Sink
     */
    updateSink(req: operations.UpdateSinkRequest, security: operations.UpdateSinkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSinkResponse>;
    /**
     * Update an Event for a Subscription.
     */
    updateSubscribedEvent(req: operations.UpdateSubscribedEventRequest, security: operations.UpdateSubscribedEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSubscribedEventResponse>;
    /**
     * Update a Subscription.
     */
    updateSubscription(req: operations.UpdateSubscriptionRequest, security: operations.UpdateSubscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
}
