import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1ColumnSchema } from "./googleclouddatacatalogv1beta1columnschema";
/**
 * Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
 */
export declare class GoogleCloudDatacatalogV1beta1Schema extends SpeakeasyBase {
    /**
     * Required. Schema of columns. A maximum of 10,000 columns and sub-columns can be specified.
     */
    columns?: GoogleCloudDatacatalogV1beta1ColumnSchema[];
}
