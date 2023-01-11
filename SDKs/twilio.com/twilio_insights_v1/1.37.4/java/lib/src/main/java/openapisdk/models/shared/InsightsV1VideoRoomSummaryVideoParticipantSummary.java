package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class InsightsV1VideoRoomSummaryVideoParticipantSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codecs")
    public VideoParticipantSummaryEnumCodecEnum[] codecs;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withCodecs(VideoParticipantSummaryEnumCodecEnum[] codecs) {
        this.codecs = codecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_sec")
    public Long durationSec;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withDurationSec(Long durationSec) {
        this.durationSec = durationSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edge_location")
    public VideoParticipantSummaryEnumEdgeLocationEnum edgeLocation;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withEdgeLocation(VideoParticipantSummaryEnumEdgeLocationEnum edgeLocation) {
        this.edgeLocation = edgeLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_reason")
    public String endReason;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withEndReason(String endReason) {
        this.endReason = endReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public Long errorCode;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withErrorCode(Long errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code_url")
    public String errorCodeUrl;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withErrorCodeUrl(String errorCodeUrl) {
        this.errorCodeUrl = errorCodeUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("join_time")
    public OffsetDateTime joinTime;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withJoinTime(OffsetDateTime joinTime) {
        this.joinTime = joinTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("leave_time")
    public OffsetDateTime leaveTime;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withLeaveTime(OffsetDateTime leaveTime) {
        this.leaveTime = leaveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_region")
    public VideoParticipantSummaryEnumTwilioRealmEnum mediaRegion;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withMediaRegion(VideoParticipantSummaryEnumTwilioRealmEnum mediaRegion) {
        this.mediaRegion = mediaRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_identity")
    public String participantIdentity;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withParticipantIdentity(String participantIdentity) {
        this.participantIdentity = participantIdentity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_sid")
    public String participantSid;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher_info")
    public Object publisherInfo;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withPublisherInfo(Object publisherInfo) {
        this.publisherInfo = publisherInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_sid")
    public String roomSid;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VideoParticipantSummaryEnumRoomStatusEnum status;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withStatus(VideoParticipantSummaryEnumRoomStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public InsightsV1VideoRoomSummaryVideoParticipantSummary withUrl(String url) {
        this.url = url;
        return this;
    }
}