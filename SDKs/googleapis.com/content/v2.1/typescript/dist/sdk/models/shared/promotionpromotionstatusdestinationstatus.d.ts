import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status for the specified destination.
 */
export declare enum PromotionPromotionStatusDestinationStatusStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    InReview = "IN_REVIEW",
    Rejected = "REJECTED",
    Live = "LIVE",
    Stopped = "STOPPED",
    Expired = "EXPIRED",
    Pending = "PENDING"
}
/**
 * The destination status of the promotion.
 */
export declare class PromotionPromotionStatusDestinationStatus extends SpeakeasyBase {
    /**
     * The name of the destination.
     */
    destination?: string;
    /**
     * The status for the specified destination.
     */
    status?: PromotionPromotionStatusDestinationStatusStatusEnum;
}
