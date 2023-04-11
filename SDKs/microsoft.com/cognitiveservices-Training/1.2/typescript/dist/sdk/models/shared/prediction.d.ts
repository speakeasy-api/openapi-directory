import { SpeakeasyBase } from "../../../internal/utils";
import { PredictionTag } from "./predictiontag";
/**
 * result of an image classification request
 */
export declare class Prediction extends SpeakeasyBase {
    created?: Date;
    id?: string;
    imageUri?: string;
    iteration?: string;
    predictions?: PredictionTag[];
    project?: string;
    thumbnailUri?: string;
}
