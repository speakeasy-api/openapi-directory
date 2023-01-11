package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateUpdatePlaylistRequestPlaylistTracks {
    @JsonProperty("id")
    public String id;
    public CreateUpdatePlaylistRequestPlaylistTracks withId(String id) {
        this.id = id;
        return this;
    }
}