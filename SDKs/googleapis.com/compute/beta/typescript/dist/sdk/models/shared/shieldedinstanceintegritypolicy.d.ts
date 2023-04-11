import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The policy describes the baseline against which Instance boot integrity is measured.
 */
export declare class ShieldedInstanceIntegrityPolicy extends SpeakeasyBase {
    /**
     * Updates the integrity policy baseline using the measurements from the VM instance's most recent boot.
     */
    updateAutoLearnPolicy?: boolean;
}
