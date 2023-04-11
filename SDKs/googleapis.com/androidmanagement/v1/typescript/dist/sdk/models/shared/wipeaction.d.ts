import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.
 */
export declare class WipeAction extends SpeakeasyBase {
    /**
     * Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles.
     */
    preserveFrp?: boolean;
    /**
     * Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays.
     */
    wipeAfterDays?: number;
}
