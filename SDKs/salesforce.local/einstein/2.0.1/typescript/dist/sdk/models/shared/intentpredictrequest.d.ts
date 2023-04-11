import { SpeakeasyBase } from "../../../internal/utils";
export declare class IntentPredictRequest extends SpeakeasyBase {
    /**
     * Text for which you want to return an intent prediction.
     */
    document: string;
    /**
     * ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.
     */
    modelId: string;
    /**
     * Number of probabilities to return.
     */
    numResults?: number;
    /**
     * String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.
     */
    sampleId?: string;
}
