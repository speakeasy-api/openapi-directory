import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdCreateEntry } from "./imageidcreateentry";
/**
 * Image and tag ids. Limited to 64 images and 20 tags per batch
 */
export declare class ImageIdCreateBatch extends SpeakeasyBase {
    images?: ImageIdCreateEntry[];
    tagIds?: string[];
}
