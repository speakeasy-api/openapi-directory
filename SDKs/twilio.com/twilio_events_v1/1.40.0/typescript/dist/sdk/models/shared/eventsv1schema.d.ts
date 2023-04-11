import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class EventsV1Schema extends SpeakeasyBase {
    /**
     * The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
     */
    id?: string;
    /**
     * The latest version published of this schema.
     */
    latestVersion?: number;
    /**
     * The date that the latest schema version was created, given in ISO 8601 format.
     */
    latestVersionDateCreated?: Date;
    /**
     * Contains a dictionary of URL links to nested resources of this schema.
     */
    links?: Record<string, any>;
    /**
     * The URL of this resource.
     */
    url?: string;
}
