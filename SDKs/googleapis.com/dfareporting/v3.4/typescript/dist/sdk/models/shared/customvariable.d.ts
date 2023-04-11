import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom variable.
 */
export declare class CustomVariable extends SpeakeasyBase {
    /**
     * The index of the custom variable.
     */
    index?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customVariable".
     */
    kind?: string;
    /**
     * The value of the custom variable. The length of string must not exceed 50 characters.
     */
    value?: string;
}
