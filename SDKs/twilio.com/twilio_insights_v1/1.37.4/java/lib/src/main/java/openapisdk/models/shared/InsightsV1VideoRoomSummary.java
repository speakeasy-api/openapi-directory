package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class InsightsV1VideoRoomSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public InsightsV1VideoRoomSummary withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codecs")
    public VideoRoomSummaryEnumCodecEnum[] codecs;
    public InsightsV1VideoRoomSummary withCodecs(VideoRoomSummaryEnumCodecEnum[] codecs) {
        this.codecs = codecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrent_participants")
    public Long concurrentParticipants;
    public InsightsV1VideoRoomSummary withConcurrentParticipants(Long concurrentParticipants) {
        this.concurrentParticipants = concurrentParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("create_time")
    public OffsetDateTime createTime;
    public InsightsV1VideoRoomSummary withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_method")
    public VideoRoomSummaryEnumCreatedMethodEnum createdMethod;
    public InsightsV1VideoRoomSummary withCreatedMethod(VideoRoomSummaryEnumCreatedMethodEnum createdMethod) {
        this.createdMethod = createdMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_sec")
    public Long durationSec;
    public InsightsV1VideoRoomSummary withDurationSec(Long durationSec) {
        this.durationSec = durationSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edge_location")
    public VideoRoomSummaryEnumEdgeLocationEnum edgeLocation;
    public InsightsV1VideoRoomSummary withEdgeLocation(VideoRoomSummaryEnumEdgeLocationEnum edgeLocation) {
        this.edgeLocation = edgeLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_reason")
    public VideoRoomSummaryEnumEndReasonEnum endReason;
    public InsightsV1VideoRoomSummary withEndReason(VideoRoomSummaryEnumEndReasonEnum endReason) {
        this.endReason = endReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public InsightsV1VideoRoomSummary withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public InsightsV1VideoRoomSummary withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_concurrent_participants")
    public Long maxConcurrentParticipants;
    public InsightsV1VideoRoomSummary withMaxConcurrentParticipants(Long maxConcurrentParticipants) {
        this.maxConcurrentParticipants = maxConcurrentParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_participants")
    public Long maxParticipants;
    public InsightsV1VideoRoomSummary withMaxParticipants(Long maxParticipants) {
        this.maxParticipants = maxParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_region")
    public VideoRoomSummaryEnumTwilioRealmEnum mediaRegion;
    public InsightsV1VideoRoomSummary withMediaRegion(VideoRoomSummaryEnumTwilioRealmEnum mediaRegion) {
        this.mediaRegion = mediaRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing_state")
    public VideoRoomSummaryEnumProcessingStateEnum processingState;
    public InsightsV1VideoRoomSummary withProcessingState(VideoRoomSummaryEnumProcessingStateEnum processingState) {
        this.processingState = processingState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_enabled")
    public Boolean recordingEnabled;
    public InsightsV1VideoRoomSummary withRecordingEnabled(Boolean recordingEnabled) {
        this.recordingEnabled = recordingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_name")
    public String roomName;
    public InsightsV1VideoRoomSummary withRoomName(String roomName) {
        this.roomName = roomName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_sid")
    public String roomSid;
    public InsightsV1VideoRoomSummary withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_status")
    public VideoRoomSummaryEnumRoomStatusEnum roomStatus;
    public InsightsV1VideoRoomSummary withRoomStatus(VideoRoomSummaryEnumRoomStatusEnum roomStatus) {
        this.roomStatus = roomStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_type")
    public VideoRoomSummaryEnumRoomTypeEnum roomType;
    public InsightsV1VideoRoomSummary withRoomType(VideoRoomSummaryEnumRoomTypeEnum roomType) {
        this.roomType = roomType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public InsightsV1VideoRoomSummary withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback_method")
    public InsightsV1VideoRoomSummaryStatusCallbackMethodEnum statusCallbackMethod;
    public InsightsV1VideoRoomSummary withStatusCallbackMethod(InsightsV1VideoRoomSummaryStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_participant_duration_sec")
    public Long totalParticipantDurationSec;
    public InsightsV1VideoRoomSummary withTotalParticipantDurationSec(Long totalParticipantDurationSec) {
        this.totalParticipantDurationSec = totalParticipantDurationSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_recording_duration_sec")
    public Long totalRecordingDurationSec;
    public InsightsV1VideoRoomSummary withTotalRecordingDurationSec(Long totalRecordingDurationSec) {
        this.totalRecordingDurationSec = totalRecordingDurationSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_participant_identities")
    public Long uniqueParticipantIdentities;
    public InsightsV1VideoRoomSummary withUniqueParticipantIdentities(Long uniqueParticipantIdentities) {
        this.uniqueParticipantIdentities = uniqueParticipantIdentities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_participants")
    public Long uniqueParticipants;
    public InsightsV1VideoRoomSummary withUniqueParticipants(Long uniqueParticipants) {
        this.uniqueParticipants = uniqueParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public InsightsV1VideoRoomSummary withUrl(String url) {
        this.url = url;
        return this;
    }
}