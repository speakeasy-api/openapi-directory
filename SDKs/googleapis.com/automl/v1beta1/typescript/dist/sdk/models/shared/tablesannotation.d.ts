import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";
/**
 * Contains annotation details specific to Tables.
 */
export declare class TablesAnnotation extends SpeakeasyBase {
    /**
     * Output only. Stores the prediction score for the baseline example, which is defined as the example with all values set to their baseline values. This is used as part of the Sampled Shapley explanation of the model's prediction. This field is populated only when feature importance is requested. For regression models, this holds the baseline prediction for the baseline example. For classification models, this holds the baseline prediction for the baseline example for the argmax class.
     */
    baselineScore?: number;
    /**
     * A range between two double numbers.
     */
    predictionInterval?: DoubleRange;
    /**
     * Output only. A confidence estimate between 0.0 and 1.0, inclusive. A higher value means greater confidence in the returned value. For target_column_spec of FLOAT64 data type the score is not populated.
     */
    score?: number;
    /**
     * Output only. Auxiliary information for each of the model's input_feature_column_specs with respect to this particular prediction. If no other fields than column_spec_name and column_display_name would be populated, then this whole field is not.
     */
    tablesModelColumnInfo?: TablesModelColumnInfo[];
    /**
     * The predicted value of the row's target_column. The value depends on the column's DataType: * CATEGORY - the predicted (with the above confidence `score`) CATEGORY value. * FLOAT64 - the predicted (with above `prediction_interval`) FLOAT64 value.
     */
    value?: any;
}
