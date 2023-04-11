import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PredictionResult represents the recommendation prediction results.
 */
export declare class GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult extends SpeakeasyBase {
    /**
     * ID of the recommended catalog item
     */
    id?: string;
    /**
     * Additional item metadata / annotations. Possible values: * `catalogItem`: JSON representation of the catalogItem. Will be set if `returnCatalogItem` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Will be set if `returnItemScore` is set to true in `PredictRequest.params`.
     */
    itemMetadata?: Record<string, any>;
}
