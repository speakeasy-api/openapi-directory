import { SpeakeasyBase } from "../../../internal/utils";
import { Metaline } from "./metaline";
/**
 * The display options for an object.
 */
export declare class ObjectDisplayOptions extends SpeakeasyBase {
    /**
     * Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set is_returnable to true. The maximum number of metalines is 3.
     */
    metalines?: Metaline[];
    /**
     * The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters.
     */
    objectDisplayLabel?: string;
}
