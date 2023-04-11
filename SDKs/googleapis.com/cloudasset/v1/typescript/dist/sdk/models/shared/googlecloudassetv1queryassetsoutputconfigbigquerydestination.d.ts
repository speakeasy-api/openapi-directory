import { SpeakeasyBase } from "../../../internal/utils";
/**
 * BigQuery destination.
 */
export declare class GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination extends SpeakeasyBase {
    /**
     * Required. The BigQuery dataset where the query results will be saved. It has the format of "projects/{projectId}/datasets/{datasetId}".
     */
    dataset?: string;
    /**
     * Required. The BigQuery table where the query results will be saved. If this table does not exist, a new table with the given name will be created.
     */
    table?: string;
    /**
     * Specifies the action that occurs if the destination table or partition already exists. The following values are supported: * WRITE_TRUNCATE: If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data. * WRITE_APPEND: If the table or partition already exists, BigQuery appends the data to the table or the latest partition. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY.
     */
    writeDisposition?: string;
}
