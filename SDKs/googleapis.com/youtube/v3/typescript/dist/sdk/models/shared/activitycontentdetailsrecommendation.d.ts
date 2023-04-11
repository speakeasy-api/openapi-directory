import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
/**
 * The reason that the resource is recommended to the user.
 */
export declare enum ActivityContentDetailsRecommendationReasonEnum {
    ReasonUnspecified = "reasonUnspecified",
    VideoFavorited = "videoFavorited",
    VideoLiked = "videoLiked",
    VideoWatched = "videoWatched"
}
/**
 * Information that identifies the recommended resource.
 */
export declare class ActivityContentDetailsRecommendation extends SpeakeasyBase {
    /**
     * The reason that the resource is recommended to the user.
     */
    reason?: ActivityContentDetailsRecommendationReasonEnum;
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    resourceId?: ResourceId;
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    seedResourceId?: ResourceId;
}
