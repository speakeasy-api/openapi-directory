import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ImagePayload } from "./googleclouddatalabelingv1beta1imagepayload";
import { GoogleCloudDatalabelingV1beta1TextPayload } from "./googleclouddatalabelingv1beta1textpayload";
import { GoogleCloudDatalabelingV1beta1VideoPayload } from "./googleclouddatalabelingv1beta1videopayload";
/**
 * DataItem is a piece of data, without annotation. For example, an image.
 */
export declare class GoogleCloudDatalabelingV1beta1DataItem extends SpeakeasyBase {
    /**
     * Container of information about an image.
     */
    imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;
    /**
     * Output only. Name of the data item, in format of: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
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
