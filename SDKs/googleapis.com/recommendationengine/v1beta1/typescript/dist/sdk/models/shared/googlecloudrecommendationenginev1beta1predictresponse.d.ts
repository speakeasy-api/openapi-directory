import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult } from "./googlecloudrecommendationenginev1beta1predictresponsepredictionresult";
/**
 * Response message for predict method.
 */
export declare class GoogleCloudRecommendationengineV1beta1PredictResponse extends SpeakeasyBase {
    /**
     * True if the dryRun property was set in the request.
     */
    dryRun?: boolean;
    /**
     * IDs of items in the request that were missing from the catalog.
     */
    itemsMissingInCatalog?: string[];
    /**
     * Additional domain specific prediction response metadata.
     */
    metadata?: Record<string, any>;
    /**
     * If empty, the list is complete. If nonempty, the token to pass to the next request's PredictRequest.page_token.
     */
    nextPageToken?: string;
    /**
     * A unique recommendation token. This should be included in the user event logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.
     */
    recommendationToken?: string;
    /**
     * A list of recommended items. The order represents the ranking (from the most relevant item to the least).
     */
    results?: GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult[];
}
