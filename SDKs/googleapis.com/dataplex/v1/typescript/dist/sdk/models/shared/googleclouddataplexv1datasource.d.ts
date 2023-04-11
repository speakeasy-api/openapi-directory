import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The data source for DataScan.
 */
export declare class GoogleCloudDataplexV1DataSource extends SpeakeasyBase {
    /**
     * Immutable. The Dataplex entity that represents the data source (e.g. BigQuery table) for DataScan, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.
     */
    entity?: string;
    /**
     * Immutable. The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be: BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID
     */
    resource?: string;
}
