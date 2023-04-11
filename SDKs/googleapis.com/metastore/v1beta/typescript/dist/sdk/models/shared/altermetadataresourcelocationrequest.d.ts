import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for DataprocMetastore.AlterMetadataResourceLocation.
 */
export declare class AlterMetadataResourceLocationRequest extends SpeakeasyBase {
    /**
     * Required. The new location URI for the metadata resource.
     */
    locationUri?: string;
    /**
     * Required. The relative metadata resource name in the following format.databases/{database_id} or databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id}
     */
    resourceName?: string;
}
