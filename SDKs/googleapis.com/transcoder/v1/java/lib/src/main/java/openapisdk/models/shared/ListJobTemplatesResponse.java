package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListJobTemplatesResponse
 * Response message for `TranscoderService.ListJobTemplates`.
**/
public class ListJobTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTemplates")
    public JobTemplate[] jobTemplates;
    public ListJobTemplatesResponse withJobTemplates(JobTemplate[] jobTemplates) {
        this.jobTemplates = jobTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListJobTemplatesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListJobTemplatesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}