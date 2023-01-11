package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeploymentListDeploymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment[] deployments;
    public ListDeploymentListDeploymentResponse withDeployments(openapisdk.models.shared.ServerlessV1ServiceEnvironmentDeployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDeploymentListDeploymentResponseMeta meta;
    public ListDeploymentListDeploymentResponse withMeta(ListDeploymentListDeploymentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}