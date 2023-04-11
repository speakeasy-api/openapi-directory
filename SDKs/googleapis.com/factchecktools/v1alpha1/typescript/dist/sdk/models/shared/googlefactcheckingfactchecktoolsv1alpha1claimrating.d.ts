import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the claim rating.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating extends SpeakeasyBase {
    /**
     * For numeric ratings, the best value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.bestRating`.
     */
    bestRating?: number;
    /**
     * Corresponds to `ClaimReview.reviewRating.image`.
     */
    imageUrl?: string;
    /**
     * Corresponds to `ClaimReview.reviewRating.ratingExplanation`.
     */
    ratingExplanation?: string;
    /**
     * A numeric rating of this claim, in the range worstRating — bestRating inclusive. Corresponds to `ClaimReview.reviewRating.ratingValue`.
     */
    ratingValue?: number;
    /**
     * The truthfulness rating as a human-readible short word or phrase. Corresponds to `ClaimReview.reviewRating.alternateName`.
     */
    textualRating?: string;
    /**
     * For numeric ratings, the worst value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.worstRating`.
     */
    worstRating?: number;
}
