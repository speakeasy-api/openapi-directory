package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVolumeSnapshotsResponse
 * Response message containing the list of volume snapshots.
**/
public class ListVolumeSnapshotsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListVolumeSnapshotsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListVolumeSnapshotsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeSnapshots")
    public VolumeSnapshot[] volumeSnapshots;
    public ListVolumeSnapshotsResponse withVolumeSnapshots(VolumeSnapshot[] volumeSnapshots) {
        this.volumeSnapshots = volumeSnapshots;
        return this;
    }
}