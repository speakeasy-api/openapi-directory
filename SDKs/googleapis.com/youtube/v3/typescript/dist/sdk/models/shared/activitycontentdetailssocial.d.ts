import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
/**
 * The name of the social network.
 */
export declare enum ActivityContentDetailsSocialTypeEnum {
    Unspecified = "unspecified",
    GooglePlus = "googlePlus",
    Facebook = "facebook",
    Twitter = "twitter"
}
/**
 * Details about a social network post.
 */
export declare class ActivityContentDetailsSocial extends SpeakeasyBase {
    /**
     * The author of the social network post.
     */
    author?: string;
    /**
     * An image of the post's author.
     */
    imageUrl?: string;
    /**
     * The URL of the social network post.
     */
    referenceUrl?: string;
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    resourceId?: ResourceId;
    /**
     * The name of the social network.
     */
    type?: ActivityContentDetailsSocialTypeEnum;
}
