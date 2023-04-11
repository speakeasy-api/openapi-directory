import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1OutputConfig } from "./googleclouddatalabelingv1beta1outputconfig";
/**
 * Request message for ExportData API.
 */
export declare class GoogleCloudDatalabelingV1beta1ExportDataRequest extends SpeakeasyBase {
    /**
     * Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}
     */
    annotatedDataset?: string;
    /**
     * Optional. Filter is not supported at this moment.
     */
    filter?: string;
    /**
     * The configuration of output data.
     */
    outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig;
    /**
     * Email of the user who started the export task and should be notified by email. If empty no notification will be sent.
     */
    userEmailAddress?: string;
}
