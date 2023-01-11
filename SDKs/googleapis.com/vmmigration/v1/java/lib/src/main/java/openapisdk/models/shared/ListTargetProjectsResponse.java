package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTargetProjectsResponse
 * Response message for 'ListTargetProjects' call.
**/
public class ListTargetProjectsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTargetProjectsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetProjects")
    public TargetProject[] targetProjects;
    public ListTargetProjectsResponse withTargetProjects(TargetProject[] targetProjects) {
        this.targetProjects = targetProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListTargetProjectsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}