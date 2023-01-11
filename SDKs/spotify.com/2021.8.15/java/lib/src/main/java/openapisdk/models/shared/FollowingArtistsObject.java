package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FollowingArtistsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public FollowingArtistsObjectArtists artists;
    public FollowingArtistsObject withArtists(FollowingArtistsObjectArtists artists) {
        this.artists = artists;
        return this;
    }
}