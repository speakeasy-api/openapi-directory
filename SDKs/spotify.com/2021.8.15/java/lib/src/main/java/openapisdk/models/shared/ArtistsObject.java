package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArtistsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public ArtistObject[] artists;
    public ArtistsObject withArtists(ArtistObject[] artists) {
        this.artists = artists;
        return this;
    }
}