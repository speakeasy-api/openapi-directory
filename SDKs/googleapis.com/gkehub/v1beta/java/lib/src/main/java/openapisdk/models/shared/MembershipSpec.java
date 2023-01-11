package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipSpec
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
**/
public class MembershipSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityPolicy")
    public MembershipSpecSecurityPolicyEnum securityPolicy;
    public MembershipSpec withSecurityPolicy(MembershipSpecSecurityPolicyEnum securityPolicy) {
        this.securityPolicy = securityPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public MembershipSpec withVersion(String version) {
        this.version = version;
        return this;
    }
}