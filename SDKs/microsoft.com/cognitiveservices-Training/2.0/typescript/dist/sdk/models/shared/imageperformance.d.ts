import { SpeakeasyBase } from "../../../internal/utils";
import { ImageRegion } from "./imageregion";
import { ImageTag } from "./imagetag";
import { Prediction } from "./prediction";
/**
 * Image performance model
 */
export declare class ImagePerformance extends SpeakeasyBase {
    created?: Date;
    height?: number;
    id?: string;
    imageUri?: string;
    predictions?: Prediction[];
    regions?: ImageRegion[];
    tags?: ImageTag[];
    thumbnailUri?: string;
    width?: number;
}
