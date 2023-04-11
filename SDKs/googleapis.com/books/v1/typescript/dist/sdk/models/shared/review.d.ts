import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Author of this review.
 */
export declare class ReviewAuthor extends SpeakeasyBase {
    /**
     * Name of this person.
     */
    displayName?: string;
}
/**
 * Information regarding the source of this review, when the review is not from a Google Books user.
 */
export declare class ReviewSource extends SpeakeasyBase {
    /**
     * Name of the source.
     */
    description?: string;
    /**
     * Extra text about the source of the review.
     */
    extraDescription?: string;
    /**
     * URL of the source of the review.
     */
    url?: string;
}
export declare class Review extends SpeakeasyBase {
    /**
     * Author of this review.
     */
    author?: ReviewAuthor;
    /**
     * Review text.
     */
    content?: string;
    /**
     * Date of this review.
     */
    date?: string;
    /**
     * URL for the full review text, for reviews gathered from the web.
     */
    fullTextUrl?: string;
    /**
     * Resource type for a review.
     */
    kind?: string;
    /**
     * Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.
     */
    rating?: string;
    /**
     * Information regarding the source of this review, when the review is not from a Google Books user.
     */
    source?: ReviewSource;
    /**
     * Title for this review.
     */
    title?: string;
    /**
     * Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.
     */
    type?: string;
    /**
     * Volume that this review is for.
     */
    volumeId?: string;
}
