package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUpdatePlaylistRequestPlaylist {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateUpdatePlaylistRequestPlaylist withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharing")
    public CreateUpdatePlaylistRequestPlaylistSharingEnum sharing;
    public CreateUpdatePlaylistRequestPlaylist withSharing(CreateUpdatePlaylistRequestPlaylistSharingEnum sharing) {
        this.sharing = sharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CreateUpdatePlaylistRequestPlaylist withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public CreateUpdatePlaylistRequestPlaylistTracks[] tracks;
    public CreateUpdatePlaylistRequestPlaylist withTracks(CreateUpdatePlaylistRequestPlaylistTracks[] tracks) {
        this.tracks = tracks;
        return this;
    }
}