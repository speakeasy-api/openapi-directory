package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListReplicationCyclesResponse
 * Response message for 'ListReplicationCycles' request.
**/
public class ListReplicationCyclesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListReplicationCyclesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationCycles")
    public ReplicationCycle[] replicationCycles;
    public ListReplicationCyclesResponse withReplicationCycles(ReplicationCycle[] replicationCycles) {
        this.replicationCycles = replicationCycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListReplicationCyclesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}