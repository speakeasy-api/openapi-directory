import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class EventsV1SchemaSchemaVersion extends SpeakeasyBase {
    /**
     * The date the schema version was created, given in ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
     */
    id?: string;
    raw?: string;
    /**
     * The version of this schema.
     */
    schemaVersion?: number;
    /**
     * The URL of this resource.
     */
    url?: string;
}
