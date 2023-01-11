package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Playlists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public Playlist[] collection;
    public Playlists withCollection(Playlist[] collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_href")
    public String nextHref;
    public Playlists withNextHref(String nextHref) {
        this.nextHref = nextHref;
        return this;
    }
}