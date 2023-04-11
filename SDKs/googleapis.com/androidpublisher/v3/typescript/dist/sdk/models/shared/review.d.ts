import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * An Android app review.
 */
export declare class Review extends SpeakeasyBase {
    /**
     * The name of the user who wrote the review.
     */
    authorName?: string;
    /**
     * A repeated field containing comments for the review.
     */
    comments?: Comment[];
    /**
     * Unique identifier for this review.
     */
    reviewId?: string;
}
