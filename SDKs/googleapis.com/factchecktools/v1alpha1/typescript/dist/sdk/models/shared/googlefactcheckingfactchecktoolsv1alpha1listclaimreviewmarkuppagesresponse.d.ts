import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage";
/**
 * Response from listing `ClaimReview` markup.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse extends SpeakeasyBase {
    /**
     * The result list of pages of `ClaimReview` markup.
     */
    claimReviewMarkupPages?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[];
    /**
     * The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string;
}
