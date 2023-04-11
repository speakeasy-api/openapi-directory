import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaFieldSpec } from "./schemafieldspec";
/**
 * The type of API resource. For Schema resources, this is always `admin#directory#schema`.
 */
export declare class Schema extends SpeakeasyBase {
    /**
     * Display name for the schema.
     */
    displayName?: string;
    /**
     * The ETag of the resource.
     */
    etag?: string;
    /**
     * A list of fields in the schema.
     */
    fields?: SchemaFieldSpec[];
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * The unique identifier of the schema (Read-only)
     */
    schemaId?: string;
    /**
     * The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.
     */
    schemaName?: string;
}
