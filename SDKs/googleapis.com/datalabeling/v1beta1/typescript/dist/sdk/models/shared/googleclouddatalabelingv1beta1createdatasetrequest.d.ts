import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Dataset } from "./googleclouddatalabelingv1beta1dataset";
/**
 * Request message for CreateDataset.
 */
export declare class GoogleCloudDatalabelingV1beta1CreateDatasetRequest extends SpeakeasyBase {
    /**
     * Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
     */
    dataset?: GoogleCloudDatalabelingV1beta1Dataset;
}
