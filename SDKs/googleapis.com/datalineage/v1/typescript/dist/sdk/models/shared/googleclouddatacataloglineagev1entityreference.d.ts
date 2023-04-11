import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The soft reference to everything you can attach a lineage event to.
 */
export declare class GoogleCloudDatacatalogLineageV1EntityReference extends SpeakeasyBase {
    /**
     * Required. Fully Qualified Name of the entity. Useful for referencing entities that aren't represented as Google Cloud resources, for example, tables in Dataproc Metastore API. Examples: * `bigquery:dataset.project_id.dataset_id` * `bigquery:table.project_id.dataset_id.table_id` * `pubsub:project_id.topic_id` * `dataproc_metastore:projectId.locationId.instanceId.databaseId.tableId`
     */
    fullyQualifiedName?: string;
}
