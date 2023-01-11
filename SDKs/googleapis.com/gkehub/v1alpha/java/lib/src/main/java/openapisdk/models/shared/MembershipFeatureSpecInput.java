package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipFeatureSpecInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anthosobservability")
    public AnthosObservabilityMembershipSpec anthosobservability;
    public MembershipFeatureSpecInput withAnthosobservability(AnthosObservabilityMembershipSpec anthosobservability) {
        this.anthosobservability = anthosobservability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudbuild")
    public CloudBuildMembershipSpec cloudbuild;
    public MembershipFeatureSpecInput withCloudbuild(CloudBuildMembershipSpec cloudbuild) {
        this.cloudbuild = cloudbuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configmanagement")
    public ConfigManagementMembershipSpec configmanagement;
    public MembershipFeatureSpecInput withConfigmanagement(ConfigManagementMembershipSpec configmanagement) {
        this.configmanagement = configmanagement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetInherited")
    public Boolean fleetInherited;
    public MembershipFeatureSpecInput withFleetInherited(Boolean fleetInherited) {
        this.fleetInherited = fleetInherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetobservability")
    public java.util.Map<String, Object> fleetobservability;
    public MembershipFeatureSpecInput withFleetobservability(java.util.Map<String, Object> fleetobservability) {
        this.fleetobservability = fleetobservability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityservice")
    public IdentityServiceMembershipSpecInput identityservice;
    public MembershipFeatureSpecInput withIdentityservice(IdentityServiceMembershipSpecInput identityservice) {
        this.identityservice = identityservice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mesh")
    public ServiceMeshMembershipSpec mesh;
    public MembershipFeatureSpecInput withMesh(ServiceMeshMembershipSpec mesh) {
        this.mesh = mesh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policycontroller")
    public PolicyControllerMembershipSpec policycontroller;
    public MembershipFeatureSpecInput withPolicycontroller(PolicyControllerMembershipSpec policycontroller) {
        this.policycontroller = policycontroller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadcertificate")
    public MembershipSpec workloadcertificate;
    public MembershipFeatureSpecInput withWorkloadcertificate(MembershipSpec workloadcertificate) {
        this.workloadcertificate = workloadcertificate;
        return this;
    }
}