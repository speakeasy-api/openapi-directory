import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview } from "./googlefactcheckingfactchecktoolsv1alpha1claimreview";
/**
 * Information about the claim.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1Claim extends SpeakeasyBase {
    /**
     * The date that the claim was made.
     */
    claimDate?: string;
    /**
     * One or more reviews of this claim (namely, a fact-checking article).
     */
    claimReview?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[];
    /**
     * A person or organization stating the claim. For instance, "John Doe".
     */
    claimant?: string;
    /**
     * The claim text. For instance, "Crime has doubled in the last 2 years."
     */
    text?: string;
}
