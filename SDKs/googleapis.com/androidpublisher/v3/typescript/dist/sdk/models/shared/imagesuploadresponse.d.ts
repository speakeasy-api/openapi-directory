import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Response for uploading an image.
 */
export declare class ImagesUploadResponse extends SpeakeasyBase {
    /**
     * An uploaded image. The resource for ImagesService.
     */
    image?: Image;
}
