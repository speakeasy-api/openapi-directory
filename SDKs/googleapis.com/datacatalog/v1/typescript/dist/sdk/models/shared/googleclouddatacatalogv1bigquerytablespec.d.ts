import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TableSpec } from "./googleclouddatacatalogv1tablespec";
import { GoogleCloudDatacatalogV1ViewSpec } from "./googleclouddatacatalogv1viewspec";
/**
 * Output only. The table source type.
 */
export declare enum GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum {
    TableSourceTypeUnspecified = "TABLE_SOURCE_TYPE_UNSPECIFIED",
    BigqueryView = "BIGQUERY_VIEW",
    BigqueryTable = "BIGQUERY_TABLE",
    BigqueryMaterializedView = "BIGQUERY_MATERIALIZED_VIEW"
}
/**
 * Describes a BigQuery table.
 */
export declare class GoogleCloudDatacatalogV1BigQueryTableSpec extends SpeakeasyBase {
    /**
     * Output only. The table source type.
     */
    tableSourceType?: GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum;
    /**
     * Normal BigQuery table specification.
     */
    tableSpec?: GoogleCloudDatacatalogV1TableSpec;
    /**
     * Table view specification.
     */
    viewSpec?: GoogleCloudDatacatalogV1ViewSpec;
}
