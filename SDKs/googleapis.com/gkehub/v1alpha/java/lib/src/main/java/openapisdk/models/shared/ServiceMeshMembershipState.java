package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceMeshMembershipState
 * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
**/
public class ServiceMeshMembershipState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisMessages")
    public ServiceMeshAnalysisMessage[] analysisMessages;
    public ServiceMeshMembershipState withAnalysisMessages(ServiceMeshAnalysisMessage[] analysisMessages) {
        this.analysisMessages = analysisMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configApiVersion")
    public String configApiVersion;
    public ServiceMeshMembershipState withConfigApiVersion(String configApiVersion) {
        this.configApiVersion = configApiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlPlaneManagement")
    public ServiceMeshControlPlaneManagement controlPlaneManagement;
    public ServiceMeshMembershipState withControlPlaneManagement(ServiceMeshControlPlaneManagement controlPlaneManagement) {
        this.controlPlaneManagement = controlPlaneManagement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataPlaneManagement")
    public ServiceMeshDataPlaneManagement dataPlaneManagement;
    public ServiceMeshMembershipState withDataPlaneManagement(ServiceMeshDataPlaneManagement dataPlaneManagement) {
        this.dataPlaneManagement = dataPlaneManagement;
        return this;
    }
}