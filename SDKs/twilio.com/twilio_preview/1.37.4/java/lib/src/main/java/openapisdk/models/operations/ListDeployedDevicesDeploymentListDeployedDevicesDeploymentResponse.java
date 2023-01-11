package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment[] deployments;
    public ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse withDeployments(openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta meta;
    public ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse withMeta(ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}