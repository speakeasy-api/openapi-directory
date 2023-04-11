import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1ColumnSchema } from "./googleclouddatacatalogv1columnschema";
/**
 * Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.
 */
export declare class GoogleCloudDatacatalogV1Schema extends SpeakeasyBase {
    /**
     * The unified GoogleSQL-like schema of columns. The overall maximum number of columns and nested columns is 10,000. The maximum nested depth is 15 levels.
     */
    columns?: GoogleCloudDatacatalogV1ColumnSchema[];
}
