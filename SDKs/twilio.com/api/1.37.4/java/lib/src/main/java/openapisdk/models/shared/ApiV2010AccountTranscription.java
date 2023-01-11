package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountTranscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountTranscription withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountTranscription withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountTranscription withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountTranscription withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public ApiV2010AccountTranscription withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public ApiV2010AccountTranscription withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public ApiV2010AccountTranscription withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_sid")
    public String recordingSid;
    public ApiV2010AccountTranscription withRecordingSid(String recordingSid) {
        this.recordingSid = recordingSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountTranscription withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TranscriptionEnumStatusEnum status;
    public ApiV2010AccountTranscription withStatus(TranscriptionEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcription_text")
    public String transcriptionText;
    public ApiV2010AccountTranscription withTranscriptionText(String transcriptionText) {
        this.transcriptionText = transcriptionText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ApiV2010AccountTranscription withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountTranscription withUri(String uri) {
        this.uri = uri;
        return this;
    }
}