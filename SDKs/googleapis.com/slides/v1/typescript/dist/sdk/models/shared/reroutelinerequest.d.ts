import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.
 */
export declare class RerouteLineRequest extends SpeakeasyBase {
    /**
     * The object ID of the line to reroute. Only a line with a category indicating it is a "connector" can be rerouted. The start and end connections of the line must be on different page elements.
     */
    objectId?: string;
}
