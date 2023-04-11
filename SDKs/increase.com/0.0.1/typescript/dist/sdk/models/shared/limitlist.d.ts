import { SpeakeasyBase } from "../../../internal/utils";
import { Limit } from "./limit";
/**
 * A list of Limit objects
 */
export declare class LimitList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: Limit[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
