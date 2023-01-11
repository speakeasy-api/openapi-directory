package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceMeshControlPlaneManagement
 * Status of control plane management.
**/
public class ServiceMeshControlPlaneManagement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public ServiceMeshStatusDetails[] details;
    public ServiceMeshControlPlaneManagement withDetails(ServiceMeshStatusDetails[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ServiceMeshControlPlaneManagementStateEnum state;
    public ServiceMeshControlPlaneManagement withState(ServiceMeshControlPlaneManagementStateEnum state) {
        this.state = state;
        return this;
    }
}