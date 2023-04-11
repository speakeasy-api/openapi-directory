import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec } from "./googleclouddatacatalogv1databasetablespecdatabaseviewspec";
import { GoogleCloudDatacatalogV1DataplexTableSpec } from "./googleclouddatacatalogv1dataplextablespec";
/**
 * Type of this table.
 */
export declare enum GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum {
    TableTypeUnspecified = "TABLE_TYPE_UNSPECIFIED",
    Native = "NATIVE",
    External = "EXTERNAL"
}
/**
 * Specification that applies to a table resource. Valid only for entries with the `TABLE` type.
 */
export declare class GoogleCloudDatacatalogV1DatabaseTableSpec extends SpeakeasyBase {
    /**
     * Specification that applies to database view.
     */
    databaseViewSpec?: GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec;
    /**
     * Entry specification for a Dataplex table.
     */
    dataplexTable?: GoogleCloudDatacatalogV1DataplexTableSpec;
    /**
     * Type of this table.
     */
    type?: GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum;
}
