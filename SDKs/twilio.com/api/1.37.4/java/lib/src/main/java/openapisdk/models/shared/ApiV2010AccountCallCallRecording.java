package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountCallCallRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountCallCallRecording withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountCallCallRecording withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public ApiV2010AccountCallCallRecording withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public Long channels;
    public ApiV2010AccountCallCallRecording withChannels(Long channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference_sid")
    public String conferenceSid;
    public ApiV2010AccountCallCallRecording withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountCallCallRecording withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountCallCallRecording withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public ApiV2010AccountCallCallRecording withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_details")
    public Object encryptionDetails;
    public ApiV2010AccountCallCallRecording withEncryptionDetails(Object encryptionDetails) {
        this.encryptionDetails = encryptionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public Long errorCode;
    public ApiV2010AccountCallCallRecording withErrorCode(Long errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public ApiV2010AccountCallCallRecording withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public ApiV2010AccountCallCallRecording withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountCallCallRecording withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public CallRecordingEnumSourceEnum source;
    public ApiV2010AccountCallCallRecording withSource(CallRecordingEnumSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public ApiV2010AccountCallCallRecording withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CallRecordingEnumStatusEnum status;
    public ApiV2010AccountCallCallRecording withStatus(CallRecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track")
    public String track;
    public ApiV2010AccountCallCallRecording withTrack(String track) {
        this.track = track;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountCallCallRecording withUri(String uri) {
        this.uri = uri;
        return this;
    }
}