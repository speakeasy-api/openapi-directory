import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Recommendation } from "./googlecloudrecommenderv1recommendation";
/**
 * Response to the `ListRecommendations` method.
 */
export declare class GoogleCloudRecommenderV1ListRecommendationsResponse extends SpeakeasyBase {
    /**
     * A token that can be used to request the next page of results. This field is empty if there are no additional results.
     */
    nextPageToken?: string;
    /**
     * The set of recommendations for the `parent` resource.
     */
    recommendations?: GoogleCloudRecommenderV1Recommendation[];
}
