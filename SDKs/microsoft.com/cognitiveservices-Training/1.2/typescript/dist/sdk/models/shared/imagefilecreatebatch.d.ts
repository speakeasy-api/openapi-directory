import { SpeakeasyBase } from "../../../internal/utils";
import { ImageFileCreateEntry } from "./imagefilecreateentry";
/**
 * The batch of image files to add. Limited to 64 images and 20 tags per batch
 */
export declare class ImageFileCreateBatch extends SpeakeasyBase {
    images?: ImageFileCreateEntry[];
    tagIds?: string[];
}
