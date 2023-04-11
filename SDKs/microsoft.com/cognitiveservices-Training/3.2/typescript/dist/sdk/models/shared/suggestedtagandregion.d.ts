import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * Result of a suggested tags and regions request.
 */
export declare class SuggestedTagAndRegion extends SpeakeasyBase {
    /**
     * Date this prediction was created.
     */
    created?: Date;
    /**
     * Prediction Id.
     */
    id?: string;
    /**
     * Iteration Id.
     */
    iteration?: string;
    /**
     * Uncertainty (entropy) of suggested tags or regions per image.
     */
    predictionUncertainty?: number;
    /**
     * List of predictions.
     */
    predictions?: Prediction[];
    /**
     * Project Id.
     */
    project?: string;
}
