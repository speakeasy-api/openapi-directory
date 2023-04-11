import { SpeakeasyBase } from "../../../internal/utils";
import { Rating } from "./rating";
/**
 * The type of the review.
 */
export declare enum ReviewTypeEnum {
    Unknown = "UNKNOWN",
    Editorial = "EDITORIAL",
    User = "USER"
}
/**
 * A single review in a VR Listing. NEXT ID: 10
 */
export declare class Review extends SpeakeasyBase {
    /**
     * The author of the review.
     */
    author?: string;
    /**
     * The body of the review.
     */
    body?: string;
    /**
     * Language of the review, such as "en", "de", etc.
     */
    languageCode?: string;
    /**
     * The url of the review.
     */
    link?: string;
    /**
     * Any ratings associated with this review. This is repeated because reviews can include ratings on different aspects of a listing, e.g. location, cleanliness, etc.
     */
    rating?: Rating[];
    /**
     * Unix timestamp (in seconds) of the review, in UTC+0.
     */
    reviewTime?: string;
    /**
     * The title of the review, for example: Great three bedrooms.
     */
    title?: string;
    /**
     * The type of the review.
     */
    type?: ReviewTypeEnum;
    /**
     * Unix timestamp (in seconds) of when the stay was, in UTC+0.
     */
    visitTime?: string;
}
