import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * OK
 */
export declare class ImagePrediction extends SpeakeasyBase {
    created?: Date;
    id?: string;
    iteration?: string;
    predictions?: Prediction[];
    project?: string;
}
