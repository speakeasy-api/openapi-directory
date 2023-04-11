import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Wrapper for Selection Field value as combined value/display_name pair for selected choice.
 */
export declare class Selection extends SpeakeasyBase {
    /**
     * Selection value as human-readable display string.
     */
    displayName?: string;
    /**
     * Selection value as Field Choice ID.
     */
    value?: string;
}
