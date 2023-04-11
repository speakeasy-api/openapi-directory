import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1CropHintsAnnotation } from "./googlecloudvisionv1p1beta1crophintsannotation";
import { GoogleCloudVisionV1p1beta1EntityAnnotation } from "./googlecloudvisionv1p1beta1entityannotation";
import { GoogleCloudVisionV1p1beta1FaceAnnotation } from "./googlecloudvisionv1p1beta1faceannotation";
import { GoogleCloudVisionV1p1beta1ImageAnnotationContext } from "./googlecloudvisionv1p1beta1imageannotationcontext";
import { GoogleCloudVisionV1p1beta1ImageProperties } from "./googlecloudvisionv1p1beta1imageproperties";
import { GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation } from "./googlecloudvisionv1p1beta1localizedobjectannotation";
import { GoogleCloudVisionV1p1beta1ProductSearchResults } from "./googlecloudvisionv1p1beta1productsearchresults";
import { GoogleCloudVisionV1p1beta1SafeSearchAnnotation } from "./googlecloudvisionv1p1beta1safesearchannotation";
import { GoogleCloudVisionV1p1beta1TextAnnotation } from "./googlecloudvisionv1p1beta1textannotation";
import { GoogleCloudVisionV1p1beta1WebDetection } from "./googlecloudvisionv1p1beta1webdetection";
import { Status } from "./status";
/**
 * Response to an image annotation request.
 */
export declare class GoogleCloudVisionV1p1beta1AnnotateImageResponse extends SpeakeasyBase {
    /**
     * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
     */
    context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext;
    /**
     * Set of crop hints that are used to generate new crops when serving images.
     */
    cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: GoogleCloudVisionV1p1beta1FaceAnnotation[];
    /**
     * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
     */
    fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation;
    /**
     * Stores image properties, such as dominant colors.
     */
    imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
     */
    localizedObjectAnnotations?: GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * Results for a product search request.
     */
    productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults;
    /**
     * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
     */
    safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation;
    /**
     * If present, text (OCR) detection has completed successfully.
     */
    textAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * Relevant information for the image from the Internet.
     */
    webDetection?: GoogleCloudVisionV1p1beta1WebDetection;
}
