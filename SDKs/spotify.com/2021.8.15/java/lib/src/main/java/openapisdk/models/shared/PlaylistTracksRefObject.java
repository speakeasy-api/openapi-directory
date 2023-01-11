package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaylistTracksRefObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttracksrefobject - Find more info on the official Spotify Web API Reference
**/
public class PlaylistTracksRefObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public PlaylistTracksRefObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public PlaylistTracksRefObject withTotal(Integer total) {
        this.total = total;
        return this;
    }
}