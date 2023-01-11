import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * Result of a suggested tags and regions request.
**/
export declare class SuggestedTagAndRegion extends SpeakeasyBase {
    created?: Date;
    id?: string;
    iteration?: string;
    predictionUncertainty?: number;
    predictions?: Prediction[];
    project?: string;
}
