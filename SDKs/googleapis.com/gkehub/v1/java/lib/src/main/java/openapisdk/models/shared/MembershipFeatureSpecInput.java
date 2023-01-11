package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipFeatureSpecInput {
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
}