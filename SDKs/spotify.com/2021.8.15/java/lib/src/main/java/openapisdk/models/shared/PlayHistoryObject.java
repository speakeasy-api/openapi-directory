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
 * PlayHistoryObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-playhistoryobject - Find more info on the official Spotify Web API Reference
**/
public class PlayHistoryObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ContextObject context;
    public PlayHistoryObject withContext(ContextObject context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("played_at")
    public OffsetDateTime playedAt;
    public PlayHistoryObject withPlayedAt(OffsetDateTime playedAt) {
        this.playedAt = playedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public SimplifiedTrackObject track;
    public PlayHistoryObject withTrack(SimplifiedTrackObject track) {
        this.track = track;
        return this;
    }
}