import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains properties of a creative field value.
 */
export declare class CreativeFieldValue extends SpeakeasyBase {
    /**
     * ID of this creative field value. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue".
     */
    kind?: string;
    /**
     * Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field.
     */
    value?: string;
}
