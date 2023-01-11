package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWorkerPoolsResponse
 * Response containing existing `WorkerPools`.
**/
public class ListWorkerPoolsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPools")
    public WorkerPool[] workerPools;
    public ListWorkerPoolsResponse withWorkerPools(WorkerPool[] workerPools) {
        this.workerPools = workerPools;
        return this;
    }
}