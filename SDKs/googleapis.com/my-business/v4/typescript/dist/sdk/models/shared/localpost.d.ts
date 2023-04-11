import { SpeakeasyBase } from "../../../internal/utils";
import { CallToAction } from "./calltoaction";
import { LocalPostEvent } from "./localpostevent";
import { LocalPostOffer } from "./localpostoffer";
import { MediaItem } from "./mediaitem";
/**
 * The type of alert the post is created for. This field is only applicable for posts of topic_type Alert, and behaves as a sub-type of Alerts.
 */
export declare enum LocalPostAlertTypeEnum {
    AlertTypeUnspecified = "ALERT_TYPE_UNSPECIFIED",
    Covid19 = "COVID_19"
}
/**
 * Output only. The state of the post, indicating what part of its lifecycle it is in.
 */
export declare enum LocalPostStateEnum {
    LocalPostStateUnspecified = "LOCAL_POST_STATE_UNSPECIFIED",
    Rejected = "REJECTED",
    Live = "LIVE",
    Processing = "PROCESSING"
}
/**
 * Required. The topic type of the post: standard, event, offer, or alert.
 */
export declare enum LocalPostTopicTypeEnum {
    LocalPostTopicTypeUnspecified = "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Event = "EVENT",
    Offer = "OFFER",
    Alert = "ALERT"
}
/**
 * Represents a [local post](https://support.google.com/business/answer/7662907) for a location.
 */
export declare class LocalPost extends SpeakeasyBase {
    /**
     * The type of alert the post is created for. This field is only applicable for posts of topic_type Alert, and behaves as a sub-type of Alerts.
     */
    alertType?: LocalPostAlertTypeEnum;
    /**
     * An action that is performed when the user clicks through the post
     */
    callToAction?: CallToAction;
    /**
     * Output only. Time of the creation of the post.
     */
    createTime?: string;
    /**
     * All the information pertaining to an event featured in a local post.
     */
    event?: LocalPostEvent;
    /**
     * The language of the local post.
     */
    languageCode?: string;
    /**
     * The media associated with the post. source_url is the only supported data field for a LocalPost MediaItem.
     */
    media?: MediaItem[];
    /**
     * Output only. Google identifier for this local post in the form: `accounts/{account_id}/locations/{location_id}/localPosts/{local_post_id}`
     */
    name?: string;
    /**
     * Specific fields for offer posts.
     */
    offer?: LocalPostOffer;
    /**
     * Output only. The link to the local post in Google search. This link can be used to share the post via social media, email, text, etc.
     */
    searchUrl?: string;
    /**
     * Output only. The state of the post, indicating what part of its lifecycle it is in.
     */
    state?: LocalPostStateEnum;
    /**
     * Description/body of the local post.
     */
    summary?: string;
    /**
     * Required. The topic type of the post: standard, event, offer, or alert.
     */
    topicType?: LocalPostTopicTypeEnum;
    /**
     * Output only. Time of the last modification of the post made by the user.
     */
    updateTime?: string;
}
