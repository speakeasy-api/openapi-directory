package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class InsightsV1Conference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public InsightsV1Conference withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference_sid")
    public String conferenceSid;
    public InsightsV1Conference withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_duration_seconds")
    public Long connectDurationSeconds;
    public InsightsV1Conference withConnectDurationSeconds(Long connectDurationSeconds) {
        this.connectDurationSeconds = connectDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("create_time")
    public OffsetDateTime createTime;
    public InsightsV1Conference withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detected_issues")
    public Object detectedIssues;
    public InsightsV1Conference withDetectedIssues(Object detectedIssues) {
        this.detectedIssues = detectedIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_seconds")
    public Long durationSeconds;
    public InsightsV1Conference withDurationSeconds(Long durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_reason")
    public ConferenceEnumConferenceEndReasonEnum endReason;
    public InsightsV1Conference withEndReason(ConferenceEnumConferenceEndReasonEnum endReason) {
        this.endReason = endReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public InsightsV1Conference withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ended_by")
    public String endedBy;
    public InsightsV1Conference withEndedBy(String endedBy) {
        this.endedBy = endedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public InsightsV1Conference withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public InsightsV1Conference withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_concurrent_participants")
    public Long maxConcurrentParticipants;
    public InsightsV1Conference withMaxConcurrentParticipants(Long maxConcurrentParticipants) {
        this.maxConcurrentParticipants = maxConcurrentParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_participants")
    public Long maxParticipants;
    public InsightsV1Conference withMaxParticipants(Long maxParticipants) {
        this.maxParticipants = maxParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mixer_region")
    public ConferenceEnumRegionEnum mixerRegion;
    public InsightsV1Conference withMixerRegion(ConferenceEnumRegionEnum mixerRegion) {
        this.mixerRegion = mixerRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mixer_region_requested")
    public ConferenceEnumRegionEnum mixerRegionRequested;
    public InsightsV1Conference withMixerRegionRequested(ConferenceEnumRegionEnum mixerRegionRequested) {
        this.mixerRegionRequested = mixerRegionRequested;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing_state")
    public ConferenceEnumProcessingStateEnum processingState;
    public InsightsV1Conference withProcessingState(ConferenceEnumProcessingStateEnum processingState) {
        this.processingState = processingState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_enabled")
    public Boolean recordingEnabled;
    public InsightsV1Conference withRecordingEnabled(Boolean recordingEnabled) {
        this.recordingEnabled = recordingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public InsightsV1Conference withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConferenceEnumConferenceStatusEnum status;
    public InsightsV1Conference withStatus(ConferenceEnumConferenceStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_info")
    public Object tagInfo;
    public InsightsV1Conference withTagInfo(Object tagInfo) {
        this.tagInfo = tagInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public ConferenceEnumTagEnum[] tags;
    public InsightsV1Conference withTags(ConferenceEnumTagEnum[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_participants")
    public Long uniqueParticipants;
    public InsightsV1Conference withUniqueParticipants(Long uniqueParticipants) {
        this.uniqueParticipants = uniqueParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public InsightsV1Conference withUrl(String url) {
        this.url = url;
        return this;
    }
}