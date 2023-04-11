import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Whether a contact has subscribed or unsubscribed from a given subscription type.
 */
export declare class Status {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get subscription statuses for a contact
     *
     * @remarks
     * Returns a list of subscriptions and their status for a given contact.
     */
    getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus(req: operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest, security: operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse>;
    /**
     * Subscribe a contact
     *
     * @remarks
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
     */
    postCommunicationPreferencesV3SubscribeSubscribe(req: shared.PublicUpdateSubscriptionStatusRequest, security: operations.PostCommunicationPreferencesV3SubscribeSubscribeSecurity, config?: AxiosRequestConfig): Promise<operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse>;
    /**
     * Unsubscribe a contact
     *
     * @remarks
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
     */
    postCommunicationPreferencesV3UnsubscribeUnsubscribe(req: shared.PublicUpdateSubscriptionStatusRequest, security: operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity, config?: AxiosRequestConfig): Promise<operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse>;
}
