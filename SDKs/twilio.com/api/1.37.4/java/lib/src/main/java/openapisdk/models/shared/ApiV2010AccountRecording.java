package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountRecording withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountRecording withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public ApiV2010AccountRecording withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public Long channels;
    public ApiV2010AccountRecording withChannels(Long channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference_sid")
    public String conferenceSid;
    public ApiV2010AccountRecording withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountRecording withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountRecording withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public ApiV2010AccountRecording withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_details")
    public Object encryptionDetails;
    public ApiV2010AccountRecording withEncryptionDetails(Object encryptionDetails) {
        this.encryptionDetails = encryptionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public Long errorCode;
    public ApiV2010AccountRecording withErrorCode(Long errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_url")
    public String mediaUrl;
    public ApiV2010AccountRecording withMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public String price;
    public ApiV2010AccountRecording withPrice(String price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public ApiV2010AccountRecording withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountRecording withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RecordingEnumSourceEnum source;
    public ApiV2010AccountRecording withSource(RecordingEnumSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public ApiV2010AccountRecording withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RecordingEnumStatusEnum status;
    public ApiV2010AccountRecording withStatus(RecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource_uris")
    public java.util.Map<String, Object> subresourceUris;
    public ApiV2010AccountRecording withSubresourceUris(java.util.Map<String, Object> subresourceUris) {
        this.subresourceUris = subresourceUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountRecording withUri(String uri) {
        this.uri = uri;
        return this;
    }
}