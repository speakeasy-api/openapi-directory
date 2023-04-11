import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
 */
export declare class GoogleCloudVisionV1p1beta1ImageAnnotationContext extends SpeakeasyBase {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
     */
    pageNumber?: number;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string;
}
