import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the `MarkInsightAccepted` method.
 */
export declare class GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest extends SpeakeasyBase {
    /**
     * Required. Fingerprint of the Insight. Provides optimistic locking.
     */
    etag?: string;
    /**
     * Optional. State properties user wish to include with this state. Full replace of the current state_metadata.
     */
    stateMetadata?: Record<string, string>;
}
