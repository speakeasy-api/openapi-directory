import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * result of an image classification request
 */
export declare class StoredImagePrediction extends SpeakeasyBase {
    created?: Date;
    domain?: string;
    id?: string;
    imageUri?: string;
    iteration?: string;
    predictions?: Prediction[];
    project?: string;
    thumbnailUri?: string;
}
