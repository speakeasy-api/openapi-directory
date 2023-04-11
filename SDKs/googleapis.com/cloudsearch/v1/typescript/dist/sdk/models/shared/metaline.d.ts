import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayedProperty } from "./displayedproperty";
/**
 * A metaline is a list of properties that are displayed along with the search result to provide context.
 */
export declare class Metaline extends SpeakeasyBase {
    /**
     * The list of displayed properties for the metaline. The maximum number of properties is 5.
     */
    properties?: DisplayedProperty[];
}
