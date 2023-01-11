package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobRequest
 * Input only. Create job request.
**/
public class CreateJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public Job job;
    public CreateJobRequest withJob(Job job) {
        this.job = job;
        return this;
    }
}