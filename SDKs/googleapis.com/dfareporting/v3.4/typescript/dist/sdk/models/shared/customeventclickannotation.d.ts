import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Annotate a click event.
 */
export declare class CustomEventClickAnnotation extends SpeakeasyBase {
    /**
     * The Google click ID. Use this field to annotate the click associated with the gclid.
     */
    gclid?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventClickAnnotation".
     */
    kind?: string;
}
