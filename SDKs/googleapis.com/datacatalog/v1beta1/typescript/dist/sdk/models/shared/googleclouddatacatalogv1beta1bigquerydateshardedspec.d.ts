import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
 */
export declare class GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec extends SpeakeasyBase {
    /**
     * Output only. The Data Catalog resource name of the dataset entry the current table belongs to, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`.
     */
    dataset?: string;
    /**
     * Output only. Total number of shards.
     */
    shardCount?: string;
    /**
     * Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`, for example, for shard `MyTable20180101`, the `table_prefix` is `MyTable`.
     */
    tablePrefix?: string;
}
