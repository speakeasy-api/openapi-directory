import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a column within a schema. Columns could be nested inside other columns.
 */
export declare class GoogleCloudDatacatalogV1beta1ColumnSchema extends SpeakeasyBase {
    /**
     * Required. Name of the column.
     */
    column?: string;
    /**
     * Optional. Description of the column. Default value is an empty string.
     */
    description?: string;
    /**
     * Optional. A column's mode indicates whether the values in this column are required, nullable, etc. Only `NULLABLE`, `REQUIRED` and `REPEATED` are supported. Default mode is `NULLABLE`.
     */
    mode?: string;
    /**
     * Optional. Schema of sub-columns. A column can have zero or more sub-columns.
     */
    subcolumns?: GoogleCloudDatacatalogV1beta1ColumnSchema[];
    /**
     * Required. Type of the column.
     */
    type?: string;
}
