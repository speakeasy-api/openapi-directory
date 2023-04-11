import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating } from "./googlefactcheckingfactchecktoolsv1alpha1claimrating";
/**
 * Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup extends SpeakeasyBase {
    /**
     * A list of links to works in which this claim appears, aside from the one specified in `claim_first_appearance`. Corresponds to `ClaimReview.itemReviewed[@type=Claim].appearance.url`.
     */
    claimAppearances?: string[];
    /**
     * Information about the claim author.
     */
    claimAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;
    /**
     * The date when the claim was made or entered public discourse. Corresponds to `ClaimReview.itemReviewed.datePublished`.
     */
    claimDate?: string;
    /**
     * A link to a work in which this claim first appears. Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`.
     */
    claimFirstAppearance?: string;
    /**
     * The location where this claim was made. Corresponds to `ClaimReview.itemReviewed.name`.
     */
    claimLocation?: string;
    /**
     * A short summary of the claim being evaluated. Corresponds to `ClaimReview.claimReviewed`.
     */
    claimReviewed?: string;
    /**
     * Information about the claim rating.
     */
    rating?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;
    /**
     * This field is optional, and will default to the page URL. We provide this field to allow you the override the default value, but the only permitted override is the page URL plus an optional anchor link ("page jump"). Corresponds to `ClaimReview.url`
     */
    url?: string;
}
