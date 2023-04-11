import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the claim author.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor extends SpeakeasyBase {
    /**
     * Corresponds to `ClaimReview.itemReviewed.author.image`.
     */
    imageUrl?: string;
    /**
     * Corresponds to `ClaimReview.itemReviewed.author.jobTitle`.
     */
    jobTitle?: string;
    /**
     * A person or organization stating the claim. For instance, "John Doe". Corresponds to `ClaimReview.itemReviewed.author.name`.
     */
    name?: string;
    /**
     * Corresponds to `ClaimReview.itemReviewed.author.sameAs`.
     */
    sameAs?: string;
}
