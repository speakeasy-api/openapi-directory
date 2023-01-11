package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSnapshotsResponse
 * ListSnapshotsResponse is the result of ListSnapshotsRequest.
**/
public class ListSnapshotsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSnapshotsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshots")
    public Snapshot[] snapshots;
    public ListSnapshotsResponse withSnapshots(Snapshot[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
}