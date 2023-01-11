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
 * PlaylistTrackObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject - Find more info on the official Spotify Web API Reference
**/
public class PlaylistTrackObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("added_at")
    public OffsetDateTime addedAt;
    public PlaylistTrackObject withAddedAt(OffsetDateTime addedAt) {
        this.addedAt = addedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_by")
    public PublicUserObject addedBy;
    public PlaylistTrackObject withAddedBy(PublicUserObject addedBy) {
        this.addedBy = addedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_local")
    public Boolean isLocal;
    public PlaylistTrackObject withIsLocal(Boolean isLocal) {
        this.isLocal = isLocal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public Object track;
    public PlaylistTrackObject withTrack(Object track) {
        this.track = track;
        return this;
    }
}