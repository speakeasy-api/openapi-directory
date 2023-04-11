import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class BulkexportsV1Export extends SpeakeasyBase {
    /**
     * Contains a dictionary of URL links to nested resources of this Export.
     */
    links?: Record<string, any>;
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
