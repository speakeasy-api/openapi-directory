import { SpeakeasyBase } from "../../../internal/utils";
import { Disapproval } from "./disapproval";
import { ServingContext } from "./servingcontext";
/**
 * The status of the creative in this context (for example, it has been explicitly disapproved or is pending review).
 */
export declare enum ServingRestrictionStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Disapproval = "DISAPPROVAL",
    PendingReview = "PENDING_REVIEW"
}
/**
 * Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).
 */
export declare class ServingRestriction extends SpeakeasyBase {
    /**
     * The contexts for the restriction.
     */
    contexts?: ServingContext[];
    /**
     * Output only. The reason and details for a disapproval.
     */
    disapproval?: Disapproval;
    /**
     * Any disapprovals bound to this restriction. Only present if status=DISAPPROVED. Can be used to filter the response of the creatives.list method. Deprecated; use disapproval field instead.
     */
    disapprovalReasons?: Disapproval[];
    /**
     * The status of the creative in this context (for example, it has been explicitly disapproved or is pending review).
     */
    status?: ServingRestrictionStatusEnum;
}
