import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of Shielded VM options.
 */
export declare class ShieldedVmConfig extends SpeakeasyBase {
    /**
     * Defines whether the instance has integrity monitoring enabled.
     */
    enableIntegrityMonitoring?: boolean;
    /**
     * Defines whether the instance has Secure Boot enabled.
     */
    enableSecureBoot?: boolean;
    /**
     * Defines whether the instance has the vTPM enabled.
     */
    enableVtpm?: boolean;
}
