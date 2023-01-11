package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchedulerResource
 * Configuration for resources used by Airflow schedulers.
**/
public class SchedulerResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public SchedulerResource withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu")
    public Float cpu;
    public SchedulerResource withCpu(Float cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryGb")
    public Float memoryGb;
    public SchedulerResource withMemoryGb(Float memoryGb) {
        this.memoryGb = memoryGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageGb")
    public Float storageGb;
    public SchedulerResource withStorageGb(Float storageGb) {
        this.storageGb = storageGb;
        return this;
    }
}