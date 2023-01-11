package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreatePerfSamplesRequest
 * The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
**/
public class BatchCreatePerfSamplesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perfSamples")
    public PerfSample[] perfSamples;
    public BatchCreatePerfSamplesRequest withPerfSamples(PerfSample[] perfSamples) {
        this.perfSamples = perfSamples;
        return this;
    }
}