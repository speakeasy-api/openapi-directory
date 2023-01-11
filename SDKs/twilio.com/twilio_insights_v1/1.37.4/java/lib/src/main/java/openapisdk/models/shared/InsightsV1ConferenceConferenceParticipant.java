package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class InsightsV1ConferenceConferenceParticipant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public InsightsV1ConferenceConferenceParticipant withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_direction")
    public ConferenceParticipantEnumCallDirectionEnum callDirection;
    public InsightsV1ConferenceConferenceParticipant withCallDirection(ConferenceParticipantEnumCallDirectionEnum callDirection) {
        this.callDirection = callDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public InsightsV1ConferenceConferenceParticipant withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_status")
    public ConferenceParticipantEnumCallStatusEnum callStatus;
    public InsightsV1ConferenceConferenceParticipant withCallStatus(ConferenceParticipantEnumCallStatusEnum callStatus) {
        this.callStatus = callStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_type")
    public ConferenceParticipantEnumCallTypeEnum callType;
    public InsightsV1ConferenceConferenceParticipant withCallType(ConferenceParticipantEnumCallTypeEnum callType) {
        this.callType = callType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coached_participants")
    public String[] coachedParticipants;
    public InsightsV1ConferenceConferenceParticipant withCoachedParticipants(String[] coachedParticipants) {
        this.coachedParticipants = coachedParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference_region")
    public ConferenceParticipantEnumRegionEnum conferenceRegion;
    public InsightsV1ConferenceConferenceParticipant withConferenceRegion(ConferenceParticipantEnumRegionEnum conferenceRegion) {
        this.conferenceRegion = conferenceRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference_sid")
    public String conferenceSid;
    public InsightsV1ConferenceConferenceParticipant withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public String countryCode;
    public InsightsV1ConferenceConferenceParticipant withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_seconds")
    public Long durationSeconds;
    public InsightsV1ConferenceConferenceParticipant withDurationSeconds(Long durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public Object events;
    public InsightsV1ConferenceConferenceParticipant withEvents(Object events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public InsightsV1ConferenceConferenceParticipant withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_coach")
    public Boolean isCoach;
    public InsightsV1ConferenceConferenceParticipant withIsCoach(Boolean isCoach) {
        this.isCoach = isCoach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_moderator")
    public Boolean isModerator;
    public InsightsV1ConferenceConferenceParticipant withIsModerator(Boolean isModerator) {
        this.isModerator = isModerator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jitter_buffer_size")
    public ConferenceParticipantEnumJitterBufferSizeEnum jitterBufferSize;
    public InsightsV1ConferenceConferenceParticipant withJitterBufferSize(ConferenceParticipantEnumJitterBufferSizeEnum jitterBufferSize) {
        this.jitterBufferSize = jitterBufferSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("join_time")
    public OffsetDateTime joinTime;
    public InsightsV1ConferenceConferenceParticipant withJoinTime(OffsetDateTime joinTime) {
        this.joinTime = joinTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public InsightsV1ConferenceConferenceParticipant withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("leave_time")
    public OffsetDateTime leaveTime;
    public InsightsV1ConferenceConferenceParticipant withLeaveTime(OffsetDateTime leaveTime) {
        this.leaveTime = leaveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Object metrics;
    public InsightsV1ConferenceConferenceParticipant withMetrics(Object metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_queue_length")
    public Long outboundQueueLength;
    public InsightsV1ConferenceConferenceParticipant withOutboundQueueLength(Long outboundQueueLength) {
        this.outboundQueueLength = outboundQueueLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_time_in_queue")
    public Long outboundTimeInQueue;
    public InsightsV1ConferenceConferenceParticipant withOutboundTimeInQueue(Long outboundTimeInQueue) {
        this.outboundTimeInQueue = outboundTimeInQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_region")
    public ConferenceParticipantEnumRegionEnum participantRegion;
    public InsightsV1ConferenceConferenceParticipant withParticipantRegion(ConferenceParticipantEnumRegionEnum participantRegion) {
        this.participantRegion = participantRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_sid")
    public String participantSid;
    public InsightsV1ConferenceConferenceParticipant withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing_state")
    public ConferenceParticipantEnumProcessingStateEnum processingState;
    public InsightsV1ConferenceConferenceParticipant withProcessingState(ConferenceParticipantEnumProcessingStateEnum processingState) {
        this.processingState = processingState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public InsightsV1ConferenceConferenceParticipant withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public InsightsV1ConferenceConferenceParticipant withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public InsightsV1ConferenceConferenceParticipant withUrl(String url) {
        this.url = url;
        return this;
    }
}