import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class EventsV1EventType extends SpeakeasyBase {
    /**
     * The date that this Event Type was created, given in ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * The date that this Event Type was updated, given in ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * A human readable description for this Event Type.
     */
    description?: string;
    links?: Record<string, any>;
    /**
     * A string that uniquely identifies the Schema this Event Type adheres to.
     */
    schemaId?: string;
    /**
     * A string that uniquely identifies this Event Type.
     */
    type?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
