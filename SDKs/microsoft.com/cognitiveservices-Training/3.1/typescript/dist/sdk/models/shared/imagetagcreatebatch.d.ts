import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTagCreateEntry } from "./imagetagcreateentry";
/**
 * Batch of image tags.
 */
export declare class ImageTagCreateBatch extends SpeakeasyBase {
    /**
     * Image Tag entries to include in this batch.
     */
    tags?: ImageTagCreateEntry[];
}
