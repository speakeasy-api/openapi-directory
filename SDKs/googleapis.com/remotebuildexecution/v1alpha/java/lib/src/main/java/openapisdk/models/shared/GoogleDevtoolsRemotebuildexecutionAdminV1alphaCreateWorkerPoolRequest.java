package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest
 * The request used for `CreateWorkerPool`.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poolId")
    public String poolId;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPool")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool workerPool;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest withWorkerPool(GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}