package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudBuildMembershipSpec
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
**/
public class CloudBuildMembershipSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityPolicy")
    public CloudBuildMembershipSpecSecurityPolicyEnum securityPolicy;
    public CloudBuildMembershipSpec withSecurityPolicy(CloudBuildMembershipSpecSecurityPolicyEnum securityPolicy) {
        this.securityPolicy = securityPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public CloudBuildMembershipSpec withVersion(String version) {
        this.version = version;
        return this;
    }
}