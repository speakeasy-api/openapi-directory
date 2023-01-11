package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FeaturedPlaylistObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public FeaturedPlaylistObject withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlists")
    public FeaturedPlaylistObjectPlaylists playlists;
    public FeaturedPlaylistObject withPlaylists(FeaturedPlaylistObjectPlaylists playlists) {
        this.playlists = playlists;
        return this;
    }
}