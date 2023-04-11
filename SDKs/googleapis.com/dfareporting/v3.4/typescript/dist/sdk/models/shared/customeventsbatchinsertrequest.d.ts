import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEvent } from "./customevent";
/**
 * Insert Custom Events Request.
 */
export declare class CustomEventsBatchInsertRequest extends SpeakeasyBase {
    /**
     * The set of custom events to insert.
     */
    customEvents?: CustomEvent[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventsBatchInsertRequest".
     */
    kind?: string;
}
