package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TriggererResource
 * Configuration for resources used by Airflow triggerers.
**/
public class TriggererResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public TriggererResource withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu")
    public Float cpu;
    public TriggererResource withCpu(Float cpu) {
        this.cpu = cpu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryGb")
    public Float memoryGb;
    public TriggererResource withMemoryGb(Float memoryGb) {
        this.memoryGb = memoryGb;
        return this;
    }
}