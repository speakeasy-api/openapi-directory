import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Response for deleting all images.
 */
export declare class ImagesDeleteAllResponse extends SpeakeasyBase {
    /**
     * The deleted images.
     */
    deleted?: Image[];
}
