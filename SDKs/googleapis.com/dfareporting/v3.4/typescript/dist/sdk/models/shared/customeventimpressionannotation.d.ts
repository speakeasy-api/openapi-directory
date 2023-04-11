import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Annotate an impression.
 */
export declare class CustomEventImpressionAnnotation extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventImpressionAnnotation".
     */
    kind?: string;
    /**
     * The path impression ID. Use this field to annotate the impression associated with the pathImpressionId.
     */
    pathImpressionId?: string;
}
