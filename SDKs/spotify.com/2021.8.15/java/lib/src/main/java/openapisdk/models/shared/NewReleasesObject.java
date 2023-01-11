package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NewReleasesObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("albums")
    public NewReleasesObjectAlbums albums;
    public NewReleasesObject withAlbums(NewReleasesObjectAlbums albums) {
        this.albums = albums;
        return this;
    }
}