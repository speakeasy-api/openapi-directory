package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDeleteJobsRequest
 * Request to delete a batch of jobs.
**/
public class BatchDeleteJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public String[] names;
    public BatchDeleteJobsRequest withNames(String[] names) {
        this.names = names;
        return this;
    }
}