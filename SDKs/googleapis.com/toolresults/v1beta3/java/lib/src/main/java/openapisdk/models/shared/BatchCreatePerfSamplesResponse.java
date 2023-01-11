package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCreatePerfSamplesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perfSamples")
    public PerfSample[] perfSamples;
    public BatchCreatePerfSamplesResponse withPerfSamples(PerfSample[] perfSamples) {
        this.perfSamples = perfSamples;
        return this;
    }
}