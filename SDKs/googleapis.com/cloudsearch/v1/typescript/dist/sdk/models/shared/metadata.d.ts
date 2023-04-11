import { SpeakeasyBase } from "../../../internal/utils";
import { NamedProperty } from "./namedproperty";
import { Person } from "./person";
import { ResultDisplayMetadata } from "./resultdisplaymetadata";
import { Source } from "./source";
/**
 * Metadata of a matched search result.
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * The creation time for this document or object in the search result.
     */
    createTime?: string;
    displayOptions?: ResultDisplayMetadata;
    /**
     * Indexed fields in structured data, returned as a generic named property.
     */
    fields?: NamedProperty[];
    /**
     * Mime type of the search result.
     */
    mimeType?: string;
    /**
     * Object type of the search result.
     */
    objectType?: string;
    /**
     * Object to represent a person.
     */
    owner?: Person;
    /**
     * Defines sources for the suggest/search APIs.
     */
    source?: Source;
    /**
     * The thumbnail URL of the result.
     */
    thumbnailUrl?: string;
    /**
     * The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When `updateTime` is used for calculating freshness and is not set, this value defaults to 2 years from the current time.
     */
    updateTime?: string;
}
