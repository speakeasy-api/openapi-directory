package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkerListWorkerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWorkerListWorkerResponseMeta meta;
    public ListWorkerListWorkerResponse withMeta(ListWorkerListWorkerResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workers")
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorker[] workers;
    public ListWorkerListWorkerResponse withWorkers(openapisdk.models.shared.TaskrouterV1WorkspaceWorker[] workers) {
        this.workers = workers;
        return this;
    }
}