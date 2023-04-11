import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
 */
export declare class SubscriptionSubscriberSnippet extends SpeakeasyBase {
    /**
     * The channel ID of the subscriber.
     */
    channelId?: string;
    /**
     * The description of the subscriber.
     */
    description?: string;
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The title of the subscriber.
     */
    title?: string;
}
