package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VideoV1Recording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VideoV1Recording withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codec")
    public RecordingEnumCodecEnum codec;
    public VideoV1Recording withCodec(RecordingEnumCodecEnum codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container_format")
    public RecordingEnumFormatEnum containerFormat;
    public VideoV1Recording withContainerFormat(RecordingEnumFormatEnum containerFormat) {
        this.containerFormat = containerFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public VideoV1Recording withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public VideoV1Recording withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grouping_sids")
    public Object groupingSids;
    public VideoV1Recording withGroupingSids(Object groupingSids) {
        this.groupingSids = groupingSids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public VideoV1Recording withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_external_location")
    public String mediaExternalLocation;
    public VideoV1Recording withMediaExternalLocation(String mediaExternalLocation) {
        this.mediaExternalLocation = mediaExternalLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public VideoV1Recording withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public VideoV1Recording withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public VideoV1Recording withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_sid")
    public String sourceSid;
    public VideoV1Recording withSourceSid(String sourceSid) {
        this.sourceSid = sourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RecordingEnumStatusEnum status;
    public VideoV1Recording withStatus(RecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public VideoV1Recording withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback_method")
    public VideoV1RecordingStatusCallbackMethodEnum statusCallbackMethod;
    public VideoV1Recording withStatusCallbackMethod(VideoV1RecordingStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_name")
    public String trackName;
    public VideoV1Recording withTrackName(String trackName) {
        this.trackName = trackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RecordingEnumTypeEnum type;
    public VideoV1Recording withType(RecordingEnumTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VideoV1Recording withUrl(String url) {
        this.url = url;
        return this;
    }
}