package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest
 * The request used for UpdateWorkerPool.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPool")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool workerPool;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest withWorkerPool(GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}