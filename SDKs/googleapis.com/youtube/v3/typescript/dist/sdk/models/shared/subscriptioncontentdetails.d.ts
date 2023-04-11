import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of activity this subscription is for (only uploads, everything).
 */
export declare enum SubscriptionContentDetailsActivityTypeEnum {
    SubscriptionActivityTypeUnspecified = "subscriptionActivityTypeUnspecified",
    All = "all",
    Uploads = "uploads"
}
/**
 * Details about the content to witch a subscription refers.
 */
export declare class SubscriptionContentDetails extends SpeakeasyBase {
    /**
     * The type of activity this subscription is for (only uploads, everything).
     */
    activityType?: SubscriptionContentDetailsActivityTypeEnum;
    /**
     * The number of new items in the subscription since its content was last read.
     */
    newItemCount?: number;
    /**
     * The approximate number of items that the subscription points to.
     */
    totalItemCount?: number;
}
