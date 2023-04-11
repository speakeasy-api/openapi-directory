import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of Compute Engine Shielded instance options.
 */
export declare class GceShieldedInstanceConfig extends SpeakeasyBase {
    /**
     * Whether the instance has integrity monitoring enabled.
     */
    enableIntegrityMonitoring?: boolean;
    /**
     * Whether the instance has Secure Boot enabled.
     */
    enableSecureBoot?: boolean;
    /**
     * Whether the instance has the vTPM enabled.
     */
    enableVtpm?: boolean;
}
