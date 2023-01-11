package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVolumeBackupsResponse
 * Response message for ListVolumeBackups.
**/
public class ListVolumeBackupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListVolumeBackupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeBackups")
    public VolumeBackup[] volumeBackups;
    public ListVolumeBackupsResponse withVolumeBackups(VolumeBackup[] volumeBackups) {
        this.volumeBackups = volumeBackups;
        return this;
    }
}