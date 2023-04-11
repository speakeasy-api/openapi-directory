import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1GcsDestination } from "./googleclouddatalabelingv1beta1gcsdestination";
import { GoogleCloudDatalabelingV1beta1GcsFolderDestination } from "./googleclouddatalabelingv1beta1gcsfolderdestination";
/**
 * The configuration of output data.
 */
export declare class GoogleCloudDatalabelingV1beta1OutputConfig extends SpeakeasyBase {
    /**
     * Export destination of the data.Only gcs path is allowed in output_uri.
     */
    gcsDestination?: GoogleCloudDatalabelingV1beta1GcsDestination;
    /**
     * Export folder destination of the data.
     */
    gcsFolderDestination?: GoogleCloudDatalabelingV1beta1GcsFolderDestination;
}
