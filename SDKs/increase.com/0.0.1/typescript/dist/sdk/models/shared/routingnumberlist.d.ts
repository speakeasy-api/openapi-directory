import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingNumber } from "./routingnumber";
/**
 * A list of Routing Number objects
 */
export declare class RoutingNumberList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: RoutingNumber[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
