import { SpeakeasyBase } from "../../../internal/utils";
import { Property } from "./property";
/**
 * A collection of properties, key-value pairs that are either public or private to an application.
 */
export declare class PropertyList extends SpeakeasyBase {
    /**
     * The ETag of the list.
     */
    etag?: string;
    /**
     * The list of properties.
     */
    items?: Property[];
    /**
     * This is always drive#propertyList.
     */
    kind?: string;
    /**
     * The link back to this list.
     */
    selfLink?: string;
}
