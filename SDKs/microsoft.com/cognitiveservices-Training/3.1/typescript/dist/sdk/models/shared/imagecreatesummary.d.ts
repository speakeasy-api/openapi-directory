import { SpeakeasyBase } from "../../../internal/utils";
import { ImageCreateResult } from "./imagecreateresult";
/**
 * OK
 */
export declare class ImageCreateSummary extends SpeakeasyBase {
    /**
     * List of the image creation results.
     */
    images?: ImageCreateResult[];
    /**
     * True if all of the images in the batch were created successfully, otherwise false.
     */
    isBatchSuccessful?: boolean;
}
