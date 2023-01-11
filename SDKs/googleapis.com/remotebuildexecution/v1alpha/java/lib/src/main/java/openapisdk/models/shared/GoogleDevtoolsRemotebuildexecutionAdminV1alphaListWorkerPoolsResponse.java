package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPools")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool[] workerPools;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse withWorkerPools(GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool[] workerPools) {
        this.workerPools = workerPools;
        return this;
    }
}