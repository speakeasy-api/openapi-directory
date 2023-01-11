package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SavedAlbumObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-savedalbumobject - Find more info on the official Spotify Web API Reference
**/
public class SavedAlbumObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("added_at")
    public OffsetDateTime addedAt;
    public SavedAlbumObject withAddedAt(OffsetDateTime addedAt) {
        this.addedAt = addedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("album")
    public AlbumObject album;
    public SavedAlbumObject withAlbum(AlbumObject album) {
        this.album = album;
        return this;
    }
}