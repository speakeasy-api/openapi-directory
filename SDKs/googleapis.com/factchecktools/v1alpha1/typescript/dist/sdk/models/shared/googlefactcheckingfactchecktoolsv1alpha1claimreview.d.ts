import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1Publisher } from "./googlefactcheckingfactchecktoolsv1alpha1publisher";
/**
 * Information about a claim review.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview extends SpeakeasyBase {
    /**
     * The language this review was written in. For instance, "en" or "de".
     */
    languageCode?: string;
    /**
     * Information about the publisher.
     */
    publisher?: GoogleFactcheckingFactchecktoolsV1alpha1Publisher;
    /**
     * The date the claim was reviewed.
     */
    reviewDate?: string;
    /**
     * Textual rating. For instance, "Mostly false".
     */
    textualRating?: string;
    /**
     * The title of this claim review, if it can be determined.
     */
    title?: string;
    /**
     * The URL of this claim review.
     */
    url?: string;
}
