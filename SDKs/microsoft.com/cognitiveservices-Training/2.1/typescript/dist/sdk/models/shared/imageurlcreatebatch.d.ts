import { SpeakeasyBase } from "../../../internal/utils";
import { ImageUrlCreateEntry } from "./imageurlcreateentry";
/**
 * Image urls and tag ids. Limited to 64 images and 20 tags per batch
 */
export declare class ImageUrlCreateBatch extends SpeakeasyBase {
    images?: ImageUrlCreateEntry[];
    tagIds?: string[];
}
