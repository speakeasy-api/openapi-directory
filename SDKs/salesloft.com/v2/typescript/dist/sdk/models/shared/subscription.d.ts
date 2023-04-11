import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * SalesLoft will include this token in the webhook event payload when calling your callback_url. It is strongly encouraged for your handler to verify this value in order to ensure the request came from SalesLoft.
     */
    callbackToken?: string;
    /**
     * URL for your callback handler
     */
    callbackUrl?: string;
    /**
     * Is the Webhook Subscription enabled or not
     */
    enabled?: boolean;
    /**
     * Type of event the subscription is for
     */
    eventType?: string;
    /**
     * ID for the Webhook Subscription
     */
    id?: number;
    /**
     * ID for the tenant to which user is assigned
     */
    tenantId?: number;
    /**
     * UUID of the user the token is associated with
     */
    userGuid?: string;
}
