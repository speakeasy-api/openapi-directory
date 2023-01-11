package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_id")
    public String jobId;
    public JobId withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}