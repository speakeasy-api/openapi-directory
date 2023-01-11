package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PlaylistItemContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endAt")
    public String endAt;
    public PlaylistItemContentDetails withEndAt(String endAt) {
        this.endAt = endAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public PlaylistItemContentDetails withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startAt")
    public String startAt;
    public PlaylistItemContentDetails withStartAt(String startAt) {
        this.startAt = startAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public PlaylistItemContentDetails withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("videoPublishedAt")
    public OffsetDateTime videoPublishedAt;
    public PlaylistItemContentDetails withVideoPublishedAt(OffsetDateTime videoPublishedAt) {
        this.videoPublishedAt = videoPublishedAt;
        return this;
    }
}