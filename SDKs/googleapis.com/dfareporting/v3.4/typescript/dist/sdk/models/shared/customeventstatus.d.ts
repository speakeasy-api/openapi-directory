import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEvent } from "./customevent";
import { CustomEventError } from "./customeventerror";
/**
 * The original custom event that was inserted and whether there were any errors.
 */
export declare class CustomEventStatus extends SpeakeasyBase {
    /**
     * Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
     */
    customEvent?: CustomEvent;
    /**
     * A list of errors related to this custom event.
     */
    errors?: CustomEventError[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventStatus".
     */
    kind?: string;
}
