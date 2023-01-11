package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoV1RoomRoomRecordingRuleRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public Boolean all;
    public VideoV1RoomRoomRecordingRuleRules withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VideoV1RoomRoomRecordingRuleRules withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public VideoV1RoomRoomRecordingRuleRules withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public String track;
    public VideoV1RoomRoomRecordingRuleRules withTrack(String track) {
        this.track = track;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public VideoV1RoomRoomRecordingRuleRules withType(String type) {
        this.type = type;
        return this;
    }
}