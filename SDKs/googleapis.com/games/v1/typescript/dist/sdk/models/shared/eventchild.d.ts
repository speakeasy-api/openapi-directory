import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event child relationship resource.
 */
export declare class EventChild extends SpeakeasyBase {
    /**
     * The ID of the child event.
     */
    childId?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventChild`.
     */
    kind?: string;
}
