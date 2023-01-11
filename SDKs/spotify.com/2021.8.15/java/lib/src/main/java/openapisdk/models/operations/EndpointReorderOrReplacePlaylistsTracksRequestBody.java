package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointReorderOrReplacePlaylistsTracksRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_before")
    public Integer insertBefore;
    public EndpointReorderOrReplacePlaylistsTracksRequestBody withInsertBefore(Integer insertBefore) {
        this.insertBefore = insertBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range_length")
    public Integer rangeLength;
    public EndpointReorderOrReplacePlaylistsTracksRequestBody withRangeLength(Integer rangeLength) {
        this.rangeLength = rangeLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range_start")
    public Integer rangeStart;
    public EndpointReorderOrReplacePlaylistsTracksRequestBody withRangeStart(Integer rangeStart) {
        this.rangeStart = rangeStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshot_id")
    public String snapshotId;
    public EndpointReorderOrReplacePlaylistsTracksRequestBody withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public EndpointReorderOrReplacePlaylistsTracksRequestBody withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
}