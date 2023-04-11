import { SpeakeasyBase } from "../../../internal/utils";
import { LabelResult } from "./labelresult";
/**
 * Prediction Result
 */
export declare class IntentPredictResponse extends SpeakeasyBase {
    object?: string;
    probabilities?: LabelResult[];
    /**
     * Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.
     */
    sampleId?: string;
}
