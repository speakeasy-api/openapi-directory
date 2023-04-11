import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Represents the tree around a given status. Used for reconstructing threads of statuses.
 *
 * @see {@link https://docs.joinmastodon.org/entities/context/}
 */
export declare class Context extends SpeakeasyBase {
    /**
     * Parents in the thread.
     */
    ancestors: Status[];
    /**
     * Children in the thread.
     */
    descendants: Status[];
}
