package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipFeatureSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anthosobservability")
    public AnthosObservabilityMembershipSpec anthosobservability;
    public MembershipFeatureSpec withAnthosobservability(AnthosObservabilityMembershipSpec anthosobservability) {
        this.anthosobservability = anthosobservability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudbuild")
    public MembershipSpec cloudbuild;
    public MembershipFeatureSpec withCloudbuild(MembershipSpec cloudbuild) {
        this.cloudbuild = cloudbuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configmanagement")
    public ConfigManagementMembershipSpec configmanagement;
    public MembershipFeatureSpec withConfigmanagement(ConfigManagementMembershipSpec configmanagement) {
        this.configmanagement = configmanagement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetInherited")
    public Boolean fleetInherited;
    public MembershipFeatureSpec withFleetInherited(Boolean fleetInherited) {
        this.fleetInherited = fleetInherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetobservability")
    public java.util.Map<String, Object> fleetobservability;
    public MembershipFeatureSpec withFleetobservability(java.util.Map<String, Object> fleetobservability) {
        this.fleetobservability = fleetobservability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityservice")
    public IdentityServiceMembershipSpec identityservice;
    public MembershipFeatureSpec withIdentityservice(IdentityServiceMembershipSpec identityservice) {
        this.identityservice = identityservice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mesh")
    public ServiceMeshMembershipSpec mesh;
    public MembershipFeatureSpec withMesh(ServiceMeshMembershipSpec mesh) {
        this.mesh = mesh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policycontroller")
    public PolicyControllerMembershipSpec policycontroller;
    public MembershipFeatureSpec withPolicycontroller(PolicyControllerMembershipSpec policycontroller) {
        this.policycontroller = policycontroller;
        return this;
    }
}