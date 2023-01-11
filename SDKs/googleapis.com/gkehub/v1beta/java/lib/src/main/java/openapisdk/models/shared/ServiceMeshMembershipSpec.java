package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceMeshMembershipSpec
 * **Service Mesh**: Spec for a single Membership for the servicemesh feature
**/
public class ServiceMeshMembershipSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlPlane")
    public ServiceMeshMembershipSpecControlPlaneEnum controlPlane;
    public ServiceMeshMembershipSpec withControlPlane(ServiceMeshMembershipSpecControlPlaneEnum controlPlane) {
        this.controlPlane = controlPlane;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("management")
    public ServiceMeshMembershipSpecManagementEnum management;
    public ServiceMeshMembershipSpec withManagement(ServiceMeshMembershipSpecManagementEnum management) {
        this.management = management;
        return this;
    }
}