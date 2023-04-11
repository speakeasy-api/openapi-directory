import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration } from "./googlecloudrecommendationenginev1beta1predictionapikeyregistration";
/**
 * Response message for the `ListPredictionApiKeyRegistrations`.
 */
export declare class GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse extends SpeakeasyBase {
    /**
     * If empty, the list is complete. If nonempty, pass the token to the next request's `ListPredictionApiKeysRegistrationsRequest.pageToken`.
     */
    nextPageToken?: string;
    /**
     * The list of registered API keys.
     */
    predictionApiKeyRegistrations?: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration[];
}
