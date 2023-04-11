import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup";
/**
 * Holds one or more instances of `ClaimReview` markup for a webpage.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage extends SpeakeasyBase {
    /**
     * Information about the claim review author.
     */
    claimReviewAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;
    /**
     * A list of individual claim reviews for this page. Each item in the list corresponds to one `ClaimReview` element.
     */
    claimReviewMarkups?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[];
    /**
     * The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.
     */
    name?: string;
    /**
     * The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden. Corresponds to `ClaimReview.url`
     */
    pageUrl?: string;
    /**
     * The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value. Corresponds to `ClaimReview.datePublished`
     */
    publishDate?: string;
    /**
     * The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user.
     */
    versionId?: string;
}
