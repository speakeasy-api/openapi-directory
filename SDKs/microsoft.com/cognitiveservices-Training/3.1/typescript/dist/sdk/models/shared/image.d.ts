import { SpeakeasyBase } from "../../../internal/utils";
import { ImageRegion } from "./imageregion";
import { ImageTag } from "./imagetag";
/**
 * Image model to be sent as JSON.
**/
export declare class Image extends SpeakeasyBase {
    created?: Date;
    height?: number;
    id?: string;
    originalImageUri?: string;
    regions?: ImageRegion[];
    resizedImageUri?: string;
    tags?: ImageTag[];
    thumbnailUri?: string;
    width?: number;
}
