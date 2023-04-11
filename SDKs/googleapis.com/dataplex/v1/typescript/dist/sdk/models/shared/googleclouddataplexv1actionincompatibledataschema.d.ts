import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the action relates to a schema that is incompatible or modified.
 */
export declare enum GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum {
    SchemaChangeUnspecified = "SCHEMA_CHANGE_UNSPECIFIED",
    Incompatible = "INCOMPATIBLE",
    Modified = "MODIFIED"
}
/**
 * Action details for incompatible schemas detected by discovery.
 */
export declare class GoogleCloudDataplexV1ActionIncompatibleDataSchema extends SpeakeasyBase {
    /**
     * The existing and expected schema of the table. The schema is provided as a JSON formatted structure listing columns and data types.
     */
    existingSchema?: string;
    /**
     * The new and incompatible schema within the table. The schema is provided as a JSON formatted structured listing columns and data types.
     */
    newSchema?: string;
    /**
     * The list of data locations sampled and used for format/schema inference.
     */
    sampledDataLocations?: string[];
    /**
     * Whether the action relates to a schema that is incompatible or modified.
     */
    schemaChange?: GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum;
    /**
     * The name of the table containing invalid data.
     */
    table?: string;
}
