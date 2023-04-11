import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1Claim } from "./googlefactcheckingfactchecktoolsv1alpha1claim";
/**
 * Response from searching fact-checked claims.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse extends SpeakeasyBase {
    /**
     * The list of claims and all of their associated information.
     */
    claims?: GoogleFactcheckingFactchecktoolsV1alpha1Claim[];
    /**
     * The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string;
}
