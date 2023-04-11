import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies workload certificate management.
 */
export declare enum MembershipSpecCertificateManagementEnum {
    CertificateManagementUnspecified = "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * **Workload Certificate**: The membership-specific input for WorkloadCertificate feature.
 */
export declare class MembershipSpec extends SpeakeasyBase {
    /**
     * Specifies workload certificate management.
     */
    certificateManagement?: MembershipSpecCertificateManagementEnum;
}
