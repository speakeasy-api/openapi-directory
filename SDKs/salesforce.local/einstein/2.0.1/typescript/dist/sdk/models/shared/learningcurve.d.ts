import { SpeakeasyBase } from "../../../internal/utils";
export declare class LearningCurve extends SpeakeasyBase {
    /**
     * Epoch to which the metrics correspond.
     */
    epoch?: Record<string, any>;
    /**
     * Prediction results for the set of data used to test the model during training.
     */
    epochResults?: Record<string, any>;
    /**
     * Model metrics values.
     */
    metricsData?: Record<string, any>;
    /**
     * Object returned; in this case, learningcurve.
     */
    object?: string;
}
