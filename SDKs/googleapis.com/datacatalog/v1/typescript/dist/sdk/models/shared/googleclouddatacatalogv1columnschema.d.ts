import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec } from "./googleclouddatacatalogv1columnschemalookercolumnspec";
/**
 * Optional. Most important inclusion of this column.
 */
export declare enum GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum {
    IndexingTypeUnspecified = "INDEXING_TYPE_UNSPECIFIED",
    IndexingTypeNone = "INDEXING_TYPE_NONE",
    IndexingTypeNonUnique = "INDEXING_TYPE_NON_UNIQUE",
    IndexingTypeUnique = "INDEXING_TYPE_UNIQUE",
    IndexingTypePrimaryKey = "INDEXING_TYPE_PRIMARY_KEY"
}
/**
 * A column within a schema. Columns can be nested inside other columns.
 */
export declare class GoogleCloudDatacatalogV1ColumnSchema extends SpeakeasyBase {
    /**
     * Required. Name of the column. Must be a UTF-8 string without dots (.). The maximum size is 64 bytes.
     */
    column?: string;
    /**
     * Optional. Default value for the column.
     */
    defaultValue?: string;
    /**
     * Optional. Description of the column. Default value is an empty string. The description must be a UTF-8 string with the maximum size of 2000 bytes.
     */
    description?: string;
    /**
     * Optional. Garbage collection policy for the column or column family. Applies to systems like Cloud Bigtable.
     */
    gcRule?: string;
    /**
     * Optional. Most important inclusion of this column.
     */
    highestIndexingType?: GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum;
    /**
     * Column info specific to Looker System.
     */
    lookerColumnSpec?: GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec;
    /**
     * Optional. A column's mode indicates whether values in this column are required, nullable, or repeated. Only `NULLABLE`, `REQUIRED`, and `REPEATED` values are supported. Default mode is `NULLABLE`.
     */
    mode?: string;
    /**
     * Optional. Ordinal position
     */
    ordinalPosition?: number;
    /**
     * Optional. Schema of sub-columns. A column can have zero or more sub-columns.
     */
    subcolumns?: GoogleCloudDatacatalogV1ColumnSchema[];
    /**
     * Required. Type of the column. Must be a UTF-8 string with the maximum size of 128 bytes.
     */
    type?: string;
}
