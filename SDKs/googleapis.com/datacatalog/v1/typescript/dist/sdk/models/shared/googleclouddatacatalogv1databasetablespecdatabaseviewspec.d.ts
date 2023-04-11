import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of this view.
 */
export declare enum GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    StandardView = "STANDARD_VIEW",
    MaterializedView = "MATERIALIZED_VIEW"
}
/**
 * Specification that applies to database view.
 */
export declare class GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec extends SpeakeasyBase {
    /**
     * Name of a singular table this view reflects one to one.
     */
    baseTable?: string;
    /**
     * SQL query used to generate this view.
     */
    sqlQuery?: string;
    /**
     * Type of this view.
     */
    viewType?: GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum;
}
