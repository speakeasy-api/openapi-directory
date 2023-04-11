import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";
/**
 * Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
 */
export declare class GoogleCloudDatalabelingV1beta1Dataset extends SpeakeasyBase {
    /**
     * Output only. The names of any related resources that are blocking changes to the dataset.
     */
    blockingResources?: string[];
    /**
     * Output only. Time the dataset is created.
     */
    createTime?: string;
    /**
     * Output only. The number of data items in the dataset.
     */
    dataItemCount?: string;
    /**
     * Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long.
     */
    description?: string;
    /**
     * Required. The display name of the dataset. Maximum of 64 characters.
     */
    displayName?: string;
    /**
     * Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset.
     */
    inputConfigs?: GoogleCloudDatalabelingV1beta1InputConfig[];
    /**
     * Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated.
     */
    lastMigrateTime?: string;
    /**
     * Output only. Dataset resource name, format is: projects/{project_id}/datasets/{dataset_id}
     */
    name?: string;
}
