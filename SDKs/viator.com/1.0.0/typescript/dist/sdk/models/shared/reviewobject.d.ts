import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **object** containing a single user review
 */
export declare class ReviewObject extends SpeakeasyBase {
    /**
     * **URL** of the reviewer's avatar image
     */
    ownerAvatarURL?: string;
    /**
     * **country** in which the reviewer is located
     */
    ownerCountry?: string;
    /**
     * **unique numeric identifier** of the user that submitted *this* review
     */
    ownerId?: number;
    /**
     * **name** of the user that submitted *this* review
     */
    ownerName?: string;
    /**
     * **product code** of the product that *this* review is about; e.g., `5010SYDNEY`
     */
    productCode?: string;
    /**
     * **title** of the product that *this* review is about
     */
    productTitle?: string;
    /**
     * **URL-formatted title** of the product that *this* review is about
     */
    productUrlName?: string;
    /**
     * **date** that *this* review was published
     */
    publishedDate?: string;
    /**
     * **rating** given by the reviewer
     */
    rating?: number;
    /**
     * **HTML-formatted content** of the review
     *
     * @remarks
     * - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol
     *
     */
    review?: string;
    /**
     * **unique numeric identifier** of *this* review
     */
    reviewId?: number;
    /**
     * **sort order** for *this* review
     */
    sortOrder?: number;
    /**
     * ignore (Viator only)
     */
    sslSupported?: boolean;
    /**
     * **date** that *this* review was submitted
     */
    submissionDate?: string;
    /**
     * ignore (Viator only)
     */
    viatorFeedback?: string;
    /**
     * ignore (Viator only)
     */
    viatorNotes?: string;
}
