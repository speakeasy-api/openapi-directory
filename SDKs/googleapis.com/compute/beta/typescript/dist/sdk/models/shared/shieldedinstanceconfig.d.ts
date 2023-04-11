import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of Shielded Instance options.
 */
export declare class ShieldedInstanceConfig extends SpeakeasyBase {
    /**
     * Defines whether the instance has integrity monitoring enabled. Enabled by default.
     */
    enableIntegrityMonitoring?: boolean;
    /**
     * Defines whether the instance has Secure Boot enabled. Disabled by default.
     */
    enableSecureBoot?: boolean;
    /**
     * Defines whether the instance has the vTPM enabled. Enabled by default.
     */
    enableVtpm?: boolean;
}
