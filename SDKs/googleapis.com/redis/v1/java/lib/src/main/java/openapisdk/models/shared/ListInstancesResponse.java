package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInstancesResponse
 * Response for ListInstances.
**/
public class ListInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public Instance[] instances;
    public ListInstancesResponse withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInstancesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListInstancesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}