import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
 */
export declare class SubscriptionSnippet extends SpeakeasyBase {
    /**
     * The ID that YouTube uses to uniquely identify the subscriber's channel.
     */
    channelId?: string;
    /**
     * Channel title for the channel that the subscription belongs to.
     */
    channelTitle?: string;
    /**
     * The subscription's details.
     */
    description?: string;
    /**
     * The date and time that the subscription was created.
     */
    publishedAt?: Date;
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    resourceId?: ResourceId;
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The subscription's title.
     */
    title?: string;
}
