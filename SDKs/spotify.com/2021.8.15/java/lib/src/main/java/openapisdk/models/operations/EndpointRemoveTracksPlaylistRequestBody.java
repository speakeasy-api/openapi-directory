package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointRemoveTracksPlaylistRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshot_id")
    public String snapshotId;
    public EndpointRemoveTracksPlaylistRequestBody withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @JsonProperty("tracks")
    public String[] tracks;
    public EndpointRemoveTracksPlaylistRequestBody withTracks(String[] tracks) {
        this.tracks = tracks;
        return this;
    }
}