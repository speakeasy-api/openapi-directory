import { SpeakeasyBase } from "../../../internal/utils";
export declare class BulkexportsV1ExportDay extends SpeakeasyBase {
    /**
     * The ISO 8601 format date when resources is created
     */
    createDate?: string;
    /**
     * The ISO 8601 format date of the resources in the file, for a UTC day
     */
    day?: string;
    /**
     * The friendly name specified when creating the job
     */
    friendlyName?: string;
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType?: string;
    /**
     * The size of the day's data file in bytes
     */
    size?: number;
}
