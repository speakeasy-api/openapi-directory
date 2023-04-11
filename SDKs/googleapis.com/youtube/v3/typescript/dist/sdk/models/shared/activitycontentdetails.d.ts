import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityContentDetailsBulletin } from "./activitycontentdetailsbulletin";
import { ActivityContentDetailsChannelItem } from "./activitycontentdetailschannelitem";
import { ActivityContentDetailsComment } from "./activitycontentdetailscomment";
import { ActivityContentDetailsFavorite } from "./activitycontentdetailsfavorite";
import { ActivityContentDetailsLike } from "./activitycontentdetailslike";
import { ActivityContentDetailsPlaylistItem } from "./activitycontentdetailsplaylistitem";
import { ActivityContentDetailsPromotedItem } from "./activitycontentdetailspromoteditem";
import { ActivityContentDetailsRecommendation } from "./activitycontentdetailsrecommendation";
import { ActivityContentDetailsSocial } from "./activitycontentdetailssocial";
import { ActivityContentDetailsSubscription } from "./activitycontentdetailssubscription";
import { ActivityContentDetailsUpload } from "./activitycontentdetailsupload";
/**
 * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
 */
export declare class ActivityContentDetails extends SpeakeasyBase {
    /**
     * Details about a channel bulletin post.
     */
    bulletin?: ActivityContentDetailsBulletin;
    /**
     * Details about a resource which was added to a channel.
     */
    channelItem?: ActivityContentDetailsChannelItem;
    /**
     * Information about a resource that received a comment.
     */
    comment?: ActivityContentDetailsComment;
    /**
     * Information about a video that was marked as a favorite video.
     */
    favorite?: ActivityContentDetailsFavorite;
    /**
     * Information about a resource that received a positive (like) rating.
     */
    like?: ActivityContentDetailsLike;
    /**
     * Information about a new playlist item.
     */
    playlistItem?: ActivityContentDetailsPlaylistItem;
    /**
     * Details about a resource which is being promoted.
     */
    promotedItem?: ActivityContentDetailsPromotedItem;
    /**
     * Information that identifies the recommended resource.
     */
    recommendation?: ActivityContentDetailsRecommendation;
    /**
     * Details about a social network post.
     */
    social?: ActivityContentDetailsSocial;
    /**
     * Information about a channel that a user subscribed to.
     */
    subscription?: ActivityContentDetailsSubscription;
    /**
     * Information about the uploaded video.
     */
    upload?: ActivityContentDetailsUpload;
}
