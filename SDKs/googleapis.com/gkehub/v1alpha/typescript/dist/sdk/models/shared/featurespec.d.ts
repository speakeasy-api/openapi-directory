import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipSpec } from "./membershipspec";
/**
 * Immutable. Specifies CA configuration.
 */
export declare enum FeatureSpecProvisionGoogleCaEnum {
    GoogleCaProvisioningUnspecified = "GOOGLE_CA_PROVISIONING_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * **Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.
 */
export declare class FeatureSpec extends SpeakeasyBase {
    /**
     * **Workload Certificate**: The membership-specific input for WorkloadCertificate feature.
     */
    defaultConfig?: MembershipSpec;
    /**
     * Immutable. Specifies CA configuration.
     */
    provisionGoogleCa?: FeatureSpecProvisionGoogleCaEnum;
}
