import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PredictionResult represents the recommendation prediction results.
 */
export declare class GoogleCloudRetailV2betaPredictResponsePredictionResult extends SpeakeasyBase {
    /**
     * ID of the recommended product
     */
    id?: string;
    /**
     * Additional product metadata / annotations. Possible values: * `product`: JSON representation of the product. Is set if `returnProduct` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Is set if `returnScore` is set to true in `PredictRequest.params`.
     */
    metadata?: Record<string, any>;
}
