package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateJobRequest
 * Input only. Update job request.
**/
public class UpdateJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public Job job;
    public UpdateJobRequest withJob(Job job) {
        this.job = job;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public UpdateJobRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}