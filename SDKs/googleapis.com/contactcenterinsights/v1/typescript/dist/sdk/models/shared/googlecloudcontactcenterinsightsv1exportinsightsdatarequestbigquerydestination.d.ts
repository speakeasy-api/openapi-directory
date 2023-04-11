import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A BigQuery Table Reference.
 */
export declare class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination extends SpeakeasyBase {
    /**
     * Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.
     */
    dataset?: string;
    /**
     * A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used.
     */
    projectId?: string;
    /**
     * The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error.
     */
    table?: string;
}
