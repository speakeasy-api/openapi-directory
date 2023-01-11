package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MediaV1MediaRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MediaV1MediaRecording withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public MediaV1MediaRecording withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public MediaV1MediaRecording withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public MediaV1MediaRecording withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public MediaRecordingEnumFormatEnum format;
    public MediaV1MediaRecording withFormat(MediaRecordingEnumFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public MediaV1MediaRecording withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_size")
    public Long mediaSize;
    public MediaV1MediaRecording withMediaSize(Long mediaSize) {
        this.mediaSize = mediaSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processor_sid")
    public String processorSid;
    public MediaV1MediaRecording withProcessorSid(String processorSid) {
        this.processorSid = processorSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public String resolution;
    public MediaV1MediaRecording withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public MediaV1MediaRecording withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_sid")
    public String sourceSid;
    public MediaV1MediaRecording withSourceSid(String sourceSid) {
        this.sourceSid = sourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public MediaRecordingEnumStatusEnum status;
    public MediaV1MediaRecording withStatus(MediaRecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public MediaV1MediaRecording withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback_method")
    public MediaV1MediaRecordingStatusCallbackMethodEnum statusCallbackMethod;
    public MediaV1MediaRecording withStatusCallbackMethod(MediaV1MediaRecordingStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MediaV1MediaRecording withUrl(String url) {
        this.url = url;
        return this;
    }
}