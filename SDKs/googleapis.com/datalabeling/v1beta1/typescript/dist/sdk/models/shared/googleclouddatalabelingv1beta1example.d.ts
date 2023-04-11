import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Annotation } from "./googleclouddatalabelingv1beta1annotation";
import { GoogleCloudDatalabelingV1beta1ImagePayload } from "./googleclouddatalabelingv1beta1imagepayload";
import { GoogleCloudDatalabelingV1beta1TextPayload } from "./googleclouddatalabelingv1beta1textpayload";
import { GoogleCloudDatalabelingV1beta1VideoPayload } from "./googleclouddatalabelingv1beta1videopayload";
/**
 * An Example is a piece of data and its annotation. For example, an image with label "house".
 */
export declare class GoogleCloudDatalabelingV1beta1Example extends SpeakeasyBase {
    /**
     * Output only. Annotations for the piece of data in Example. One piece of data can have multiple annotations.
     */
    annotations?: GoogleCloudDatalabelingV1beta1Annotation[];
    /**
     * Container of information about an image.
     */
    imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;
    /**
     * Output only. Name of the example, in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id}
     */
    name?: string;
    /**
     * Container of information about a piece of text.
     */
    textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;
    /**
     * Container of information of a video.
     */
    videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
}
