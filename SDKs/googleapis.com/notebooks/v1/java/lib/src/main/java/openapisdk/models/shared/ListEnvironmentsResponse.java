package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEnvironmentsResponse
 * Response for listing environments.
**/
public class ListEnvironmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public Environment[] environments;
    public ListEnvironmentsResponse withEnvironments(Environment[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEnvironmentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListEnvironmentsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}