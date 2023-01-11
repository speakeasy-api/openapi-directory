package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AlbumsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("albums")
    public AlbumObject[] albums;
    public AlbumsObject withAlbums(AlbumObject[] albums) {
        this.albums = albums;
        return this;
    }
}