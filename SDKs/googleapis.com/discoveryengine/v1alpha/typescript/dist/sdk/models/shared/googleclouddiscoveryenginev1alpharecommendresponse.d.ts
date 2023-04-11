import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult } from "./googleclouddiscoveryenginev1alpharecommendresponserecommendationresult";
/**
 * Response message for Recommend method.
 */
export declare class GoogleCloudDiscoveryengineV1alphaRecommendResponse extends SpeakeasyBase {
    /**
     * A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.
     */
    attributionToken?: string;
    /**
     * IDs of documents in the request that were missing from the default Branch associated with the requested ServingConfig.
     */
    missingIds?: string[];
    /**
     * A list of recommended Documents. The order represents the ranking (from the most relevant Document to the least).
     */
    results?: GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult[];
    /**
     * True if RecommendRequest.validate_only was set.
     */
    validateOnly?: boolean;
}
