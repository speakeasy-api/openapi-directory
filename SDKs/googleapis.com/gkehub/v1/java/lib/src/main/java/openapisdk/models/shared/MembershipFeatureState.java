package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipFeatureState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appdevexperience")
    public AppDevExperienceFeatureState appdevexperience;
    public MembershipFeatureState withAppdevexperience(AppDevExperienceFeatureState appdevexperience) {
        this.appdevexperience = appdevexperience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configmanagement")
    public ConfigManagementMembershipState configmanagement;
    public MembershipFeatureState withConfigmanagement(ConfigManagementMembershipState configmanagement) {
        this.configmanagement = configmanagement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetobservability")
    public java.util.Map<String, Object> fleetobservability;
    public MembershipFeatureState withFleetobservability(java.util.Map<String, Object> fleetobservability) {
        this.fleetobservability = fleetobservability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityservice")
    public IdentityServiceMembershipState identityservice;
    public MembershipFeatureState withIdentityservice(IdentityServiceMembershipState identityservice) {
        this.identityservice = identityservice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicemesh")
    public ServiceMeshMembershipState servicemesh;
    public MembershipFeatureState withServicemesh(ServiceMeshMembershipState servicemesh) {
        this.servicemesh = servicemesh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FeatureState state;
    public MembershipFeatureState withState(FeatureState state) {
        this.state = state;
        return this;
    }
}