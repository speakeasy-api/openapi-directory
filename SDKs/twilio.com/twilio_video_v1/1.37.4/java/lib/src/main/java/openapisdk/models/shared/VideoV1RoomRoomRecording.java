package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VideoV1RoomRoomRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VideoV1RoomRoomRecording withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codec")
    public RoomRecordingEnumCodecEnum codec;
    public VideoV1RoomRoomRecording withCodec(RoomRecordingEnumCodecEnum codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container_format")
    public RoomRecordingEnumFormatEnum containerFormat;
    public VideoV1RoomRoomRecording withContainerFormat(RoomRecordingEnumFormatEnum containerFormat) {
        this.containerFormat = containerFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public VideoV1RoomRoomRecording withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public VideoV1RoomRoomRecording withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grouping_sids")
    public Object groupingSids;
    public VideoV1RoomRoomRecording withGroupingSids(Object groupingSids) {
        this.groupingSids = groupingSids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public VideoV1RoomRoomRecording withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_external_location")
    public String mediaExternalLocation;
    public VideoV1RoomRoomRecording withMediaExternalLocation(String mediaExternalLocation) {
        this.mediaExternalLocation = mediaExternalLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public VideoV1RoomRoomRecording withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_sid")
    public String roomSid;
    public VideoV1RoomRoomRecording withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public VideoV1RoomRoomRecording withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public VideoV1RoomRoomRecording withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_sid")
    public String sourceSid;
    public VideoV1RoomRoomRecording withSourceSid(String sourceSid) {
        this.sourceSid = sourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RoomRecordingEnumStatusEnum status;
    public VideoV1RoomRoomRecording withStatus(RoomRecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_name")
    public String trackName;
    public VideoV1RoomRoomRecording withTrackName(String trackName) {
        this.trackName = trackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RoomRecordingEnumTypeEnum type;
    public VideoV1RoomRoomRecording withType(RoomRecordingEnumTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VideoV1RoomRoomRecording withUrl(String url) {
        this.url = url;
        return this;
    }
}