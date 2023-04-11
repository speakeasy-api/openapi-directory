import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Response listing all images.
 */
export declare class ImagesListResponse extends SpeakeasyBase {
    /**
     * All listed Images.
     */
    images?: Image[];
}
