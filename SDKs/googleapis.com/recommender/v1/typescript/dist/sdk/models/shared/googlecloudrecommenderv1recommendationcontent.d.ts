import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1OperationGroup } from "./googlecloudrecommenderv1operationgroup";
/**
 * Contains what resources are changing and how they are changing.
 */
export declare class GoogleCloudRecommenderV1RecommendationContent extends SpeakeasyBase {
    /**
     * Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order.
     */
    operationGroups?: GoogleCloudRecommenderV1OperationGroup[];
    /**
     * Condensed overview information about the recommendation.
     */
    overview?: Record<string, any>;
}
