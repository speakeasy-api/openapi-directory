import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";
/**
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
 */
export declare class GoogleCloudVisionV1p1beta1AnnotateFileRequest extends SpeakeasyBase {
    /**
     * Required. Requested features.
     */
    features?: GoogleCloudVisionV1p1beta1Feature[];
    /**
     * Image context and/or feature-specific parameters.
     */
    imageContext?: GoogleCloudVisionV1p1beta1ImageContext;
    /**
     * The desired input location and metadata.
     */
    inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;
    /**
     * Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file.
     */
    pages?: number[];
}
