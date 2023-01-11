package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlaylistPagingObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlists")
    public PlaylistPagingObjectPlaylists playlists;
    public PlaylistPagingObject withPlaylists(PlaylistPagingObjectPlaylists playlists) {
        this.playlists = playlists;
        return this;
    }
}