import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * Result of an image prediction request.
**/
export declare class ImagePrediction extends SpeakeasyBase {
    created?: Date;
    id?: string;
    iteration?: string;
    predictions?: Prediction[];
    project?: string;
}
