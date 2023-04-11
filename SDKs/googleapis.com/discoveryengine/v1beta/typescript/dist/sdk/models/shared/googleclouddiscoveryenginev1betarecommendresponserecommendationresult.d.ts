import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaDocument } from "./googleclouddiscoveryenginev1betadocument";
/**
 * RecommendationResult represents a generic recommendation result with associated metadata.
 */
export declare class GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult extends SpeakeasyBase {
    /**
     * Document captures all raw metadata information of items to be recommended or searched.
     */
    document?: GoogleCloudDiscoveryengineV1betaDocument;
    /**
     * Resource ID of the recommended Document.
     */
    id?: string;
    /**
     * Additional Document metadata / annotations. Possible values: * `score`: Recommendation score in double value. Is set if `returnScore` is set to true in RecommendRequest.params.
     */
    metadata?: Record<string, any>;
}
