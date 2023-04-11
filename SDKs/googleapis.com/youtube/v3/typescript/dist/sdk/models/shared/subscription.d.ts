import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionContentDetails } from "./subscriptioncontentdetails";
import { SubscriptionSnippet } from "./subscriptionsnippet";
import { SubscriptionSubscriberSnippet } from "./subscriptionsubscribersnippet";
/**
 * A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * Details about the content to witch a subscription refers.
     */
    contentDetails?: SubscriptionContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the subscription.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".
     */
    kind?: string;
    /**
     * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
     */
    snippet?: SubscriptionSnippet;
    /**
     * Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
     */
    subscriberSnippet?: SubscriptionSubscriberSnippet;
}
