import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for a phase switch
 */
export declare class SwitchConfigurationContainer extends SpeakeasyBase {
    /**
     * Flag if the switch can be turned off or is always on.
     */
    canSwitchOff?: boolean;
    /**
     * The number of the phase. (e.g. 1 for Phase L1)
     */
    number?: number;
}
