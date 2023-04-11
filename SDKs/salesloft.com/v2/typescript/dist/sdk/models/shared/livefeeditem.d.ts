import { SpeakeasyBase } from "../../../internal/utils";
export declare class LiveFeedItem extends SpeakeasyBase {
    /**
     * Information about whether this event should trigger an alert
     */
    alertMetadata?: Record<string, any>;
    /**
     * When this event occurred
     */
    eventOccurredAt?: Date;
    /**
     * The type of event
     */
    eventType?: string;
    /**
     * ID of this item
     */
    id?: number;
    /**
     * A plaintext message for this event
     */
    message?: string;
    /**
     * The metadata created for this event
     */
    metadata?: Record<string, any>;
    /**
     * The path to the application that should be followed
     */
    path?: string;
    /**
     * The key that should be used to rollup events client side. null or empty values should not be rolled up
     */
    rollupKey?: string;
    /**
     * A plaintext title for this event
     */
    title?: string;
    /**
     * UUID of the user this item is for
     */
    userGuid?: string;
}
