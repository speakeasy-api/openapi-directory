import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing sibscription information
 */
export declare class SubscriptionInput extends SpeakeasyBase {
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * The number of hours this event is retained in the database. *Only use larger numbers if you know what you are doing.* A couple of hours is enough for most use cases.
     */
    databaseHoldTimeH?: number;
    /**
     * Additional field to add some notes about this subscription.
     */
    description?: string;
    /**
     * If set to `true`, resource references in an event (e.g. the location an item moved to) are resolved and populated with data instead of giving just an ID.
     */
    populateEvents?: boolean;
    /**
     * Set to `true` if you want our server to retry if `target_url` is not giving back a `2xx` success code.
     */
    targetRetry?: boolean;
    /**
     * Url to an external service that all applicable events are pushed to (webhook). Configure to `null` if you don't wish to use this (default).
     */
    targetUrl?: string;
    /**
     * MQTT filter that is applied to all events. Allows you to select and filter events. See [Event filtering](https://intellifi.zendesk.com/hc/en-us/articles/360008791494) for more information
     */
    topicFilter?: string;
    /**
     * Whether or not the `target_url` endpoint TLS certificate is verified to be valid.
     */
    verifyTargetCertificate?: boolean;
}
/**
 * A JSON object containing the subscription
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * The number of hours this event is retained in the database. *Only use larger numbers if you know what you are doing.* A couple of hours is enough for most use cases.
     */
    databaseHoldTimeH?: number;
    /**
     * Additional field to add some notes about this subscription.
     */
    description?: string;
    /**
     * Url to the individual resource.
     */
    eventsUrl?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * If set to `true`, resource references in an event (e.g. the location an item moved to) are resolved and populated with data instead of giving just an ID.
     */
    populateEvents?: boolean;
    /**
     * If `target_url` is set or has been set before, and delivery to the target URL failed at least once, this contains debugging information about the nature of the most recent failure.
     */
    targetDeliveryLastFailure?: Record<string, any>;
    /**
     * If `target_url` is set, `target_delivery_status.ok` will be `true` or `false` depending on whether events are being succesfully delivered. `target_delivery_status.since` indicates when t his status last changed.
     */
    targetDeliveryStatus?: Record<string, any>;
    /**
     * Set to `true` if you want our server to retry if `target_url` is not giving back a `2xx` success code.
     */
    targetRetry?: boolean;
    /**
     * Url to an external service that all applicable events are pushed to (webhook). Configure to `null` if you don't wish to use this (default).
     */
    targetUrl?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * MQTT filter that is applied to all events. Allows you to select and filter events. See [Event filtering](https://intellifi.zendesk.com/hc/en-us/articles/360008791494) for more information
     */
    topicFilter?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
    /**
     * Whether or not the `target_url` endpoint TLS certificate is verified to be valid.
     */
    verifyTargetCertificate?: boolean;
}
