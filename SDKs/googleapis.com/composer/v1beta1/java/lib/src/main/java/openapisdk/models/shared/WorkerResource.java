package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkerResource
 * Configuration for resources used by Airflow workers.
**/
public class WorkerResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu")
    public Float cpu;
    public WorkerResource withCpu(Float cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCount")
    public Integer maxCount;
    public WorkerResource withMaxCount(Integer maxCount) {
        this.maxCount = maxCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryGb")
    public Float memoryGb;
    public WorkerResource withMemoryGb(Float memoryGb) {
        this.memoryGb = memoryGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minCount")
    public Integer minCount;
    public WorkerResource withMinCount(Integer minCount) {
        this.minCount = minCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageGb")
    public Float storageGb;
    public WorkerResource withStorageGb(Float storageGb) {
        this.storageGb = storageGb;
        return this;
    }
}