import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).
 */
export declare class ShieldedInstanceConfig extends SpeakeasyBase {
    /**
     * Optional. Defines whether instances have integrity monitoring enabled.
     */
    enableIntegrityMonitoring?: boolean;
    /**
     * Optional. Defines whether instances have Secure Boot enabled.
     */
    enableSecureBoot?: boolean;
    /**
     * Optional. Defines whether instances have the vTPM enabled.
     */
    enableVtpm?: boolean;
}
