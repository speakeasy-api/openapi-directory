package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VideoV1Room {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VideoV1Room withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_only")
    public Boolean audioOnly;
    public VideoV1Room withAudioOnly(Boolean audioOnly) {
        this.audioOnly = audioOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public VideoV1Room withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public VideoV1Room withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public VideoV1Room withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("empty_room_timeout")
    public Long emptyRoomTimeout;
    public VideoV1Room withEmptyRoomTimeout(Long emptyRoomTimeout) {
        this.emptyRoomTimeout = emptyRoomTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_turn")
    public Boolean enableTurn;
    public VideoV1Room withEnableTurn(Boolean enableTurn) {
        this.enableTurn = enableTurn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public VideoV1Room withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_room")
    public Boolean largeRoom;
    public VideoV1Room withLargeRoom(Boolean largeRoom) {
        this.largeRoom = largeRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public VideoV1Room withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_concurrent_published_tracks")
    public Long maxConcurrentPublishedTracks;
    public VideoV1Room withMaxConcurrentPublishedTracks(Long maxConcurrentPublishedTracks) {
        this.maxConcurrentPublishedTracks = maxConcurrentPublishedTracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_participant_duration")
    public Long maxParticipantDuration;
    public VideoV1Room withMaxParticipantDuration(Long maxParticipantDuration) {
        this.maxParticipantDuration = maxParticipantDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_participants")
    public Long maxParticipants;
    public VideoV1Room withMaxParticipants(Long maxParticipants) {
        this.maxParticipants = maxParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_region")
    public String mediaRegion;
    public VideoV1Room withMediaRegion(String mediaRegion) {
        this.mediaRegion = mediaRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_participants_on_connect")
    public Boolean recordParticipantsOnConnect;
    public VideoV1Room withRecordParticipantsOnConnect(Boolean recordParticipantsOnConnect) {
        this.recordParticipantsOnConnect = recordParticipantsOnConnect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public VideoV1Room withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RoomEnumRoomStatusEnum status;
    public VideoV1Room withStatus(RoomEnumRoomStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public VideoV1Room withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback_method")
    public VideoV1RoomStatusCallbackMethodEnum statusCallbackMethod;
    public VideoV1Room withStatusCallbackMethod(VideoV1RoomStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RoomEnumRoomTypeEnum type;
    public VideoV1Room withType(RoomEnumRoomTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public VideoV1Room withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unused_room_timeout")
    public Long unusedRoomTimeout;
    public VideoV1Room withUnusedRoomTimeout(Long unusedRoomTimeout) {
        this.unusedRoomTimeout = unusedRoomTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VideoV1Room withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_codecs")
    public RoomEnumVideoCodecEnum[] videoCodecs;
    public VideoV1Room withVideoCodecs(RoomEnumVideoCodecEnum[] videoCodecs) {
        this.videoCodecs = videoCodecs;
        return this;
    }
}