package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SpinLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlist")
    public Link playlist;
    public SpinLinks withPlaylist(Link playlist) {
        this.playlist = playlist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Link self;
    public SpinLinks withSelf(Link self) {
        this.self = self;
        return this;
    }
}