import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * Result of a suggested tags and regions request of the untagged image.
**/
export declare class StoredSuggestedTagAndRegion extends SpeakeasyBase {
    created?: Date;
    domain?: string;
    height?: number;
    id?: string;
    iteration?: string;
    originalImageUri?: string;
    predictionUncertainty?: number;
    predictions?: Prediction[];
    project?: string;
    resizedImageUri?: string;
    thumbnailUri?: string;
    width?: number;
}
