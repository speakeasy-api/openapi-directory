import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Barrier runnable blocks until all tasks in a taskgroup reach it.
 */
export declare class Barrier extends SpeakeasyBase {
    /**
     * Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier.
     */
    name?: string;
}
