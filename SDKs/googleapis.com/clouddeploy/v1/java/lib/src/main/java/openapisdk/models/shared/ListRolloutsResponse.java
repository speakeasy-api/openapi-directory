package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRolloutsResponse
 * ListRolloutsResponse is the response object reutrned by `ListRollouts`.
**/
public class ListRolloutsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRolloutsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollouts")
    public Rollout[] rollouts;
    public ListRolloutsResponse withRollouts(Rollout[] rollouts) {
        this.rollouts = rollouts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListRolloutsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}