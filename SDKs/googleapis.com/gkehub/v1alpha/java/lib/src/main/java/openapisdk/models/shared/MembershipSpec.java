package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipSpec
 * **Workload Certificate**: The membership-specific input for WorkloadCertificate feature.
**/
public class MembershipSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateManagement")
    public MembershipSpecCertificateManagementEnum certificateManagement;
    public MembershipSpec withCertificateManagement(MembershipSpecCertificateManagementEnum certificateManagement) {
        this.certificateManagement = certificateManagement;
        return this;
    }
}