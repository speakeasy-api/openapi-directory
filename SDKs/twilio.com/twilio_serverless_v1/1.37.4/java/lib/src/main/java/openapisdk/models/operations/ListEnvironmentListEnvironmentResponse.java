package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnvironmentListEnvironmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public openapisdk.models.shared.ServerlessV1ServiceEnvironment[] environments;
    public ListEnvironmentListEnvironmentResponse withEnvironments(openapisdk.models.shared.ServerlessV1ServiceEnvironment[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEnvironmentListEnvironmentResponseMeta meta;
    public ListEnvironmentListEnvironmentResponse withMeta(ListEnvironmentListEnvironmentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}