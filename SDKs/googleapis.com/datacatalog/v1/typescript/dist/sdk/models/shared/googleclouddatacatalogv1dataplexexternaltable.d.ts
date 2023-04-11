import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Service in which the external table is registered.
 */
export declare enum GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB",
    DataprocMetastore = "DATAPROC_METASTORE",
    Dataplex = "DATAPLEX",
    CloudSpanner = "CLOUD_SPANNER",
    CloudBigtable = "CLOUD_BIGTABLE",
    CloudSql = "CLOUD_SQL",
    Looker = "LOOKER"
}
/**
 * External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.
 */
export declare class GoogleCloudDatacatalogV1DataplexExternalTable extends SpeakeasyBase {
    /**
     * Name of the Data Catalog entry representing the external table.
     */
    dataCatalogEntry?: string;
    /**
     * Fully qualified name (FQN) of the external table.
     */
    fullyQualifiedName?: string;
    /**
     * Google Cloud resource name of the external table.
     */
    googleCloudResource?: string;
    /**
     * Service in which the external table is registered.
     */
    system?: GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum;
}
