package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDeleteJobsRequest
 * Input only. Batch delete jobs request.
**/
public class BatchDeleteJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public BatchDeleteJobsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}