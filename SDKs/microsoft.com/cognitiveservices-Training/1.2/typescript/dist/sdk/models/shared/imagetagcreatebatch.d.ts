import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTagCreateEntry } from "./imagetagcreateentry";
/**
 * Batch of image tags. Limited to 128 tags per batch
 */
export declare class ImageTagCreateBatch extends SpeakeasyBase {
    tags?: ImageTagCreateEntry[];
}
