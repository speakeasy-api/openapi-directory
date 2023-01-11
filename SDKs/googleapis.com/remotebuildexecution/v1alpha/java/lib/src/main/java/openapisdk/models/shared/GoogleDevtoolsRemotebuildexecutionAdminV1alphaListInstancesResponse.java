package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance[] instances;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse withInstances(GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}