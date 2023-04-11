import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the `MarkRecommendationClaimed` Method.
 */
export declare class GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest extends SpeakeasyBase {
    /**
     * Required. Fingerprint of the Recommendation. Provides optimistic locking.
     */
    etag?: string;
    /**
     * State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`.
     */
    stateMetadata?: Record<string, string>;
}
