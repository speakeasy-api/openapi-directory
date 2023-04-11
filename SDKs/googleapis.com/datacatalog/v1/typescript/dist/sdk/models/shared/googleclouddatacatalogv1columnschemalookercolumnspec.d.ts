import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Looker specific column type of this column.
 */
export declare enum GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum {
    LookerColumnTypeUnspecified = "LOOKER_COLUMN_TYPE_UNSPECIFIED",
    Dimension = "DIMENSION",
    DimensionGroup = "DIMENSION_GROUP",
    Filter = "FILTER",
    Measure = "MEASURE",
    Parameter = "PARAMETER"
}
/**
 * Column info specific to Looker System.
 */
export declare class GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec extends SpeakeasyBase {
    /**
     * Looker specific column type of this column.
     */
    type?: GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum;
}
