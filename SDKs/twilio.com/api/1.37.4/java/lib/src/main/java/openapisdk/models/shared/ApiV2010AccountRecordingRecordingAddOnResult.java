package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountRecordingRecordingAddOnResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountRecordingRecordingAddOnResult withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_on_configuration_sid")
    public String addOnConfigurationSid;
    public ApiV2010AccountRecordingRecordingAddOnResult withAddOnConfigurationSid(String addOnConfigurationSid) {
        this.addOnConfigurationSid = addOnConfigurationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_on_sid")
    public String addOnSid;
    public ApiV2010AccountRecordingRecordingAddOnResult withAddOnSid(String addOnSid) {
        this.addOnSid = addOnSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_completed")
    public String dateCompleted;
    public ApiV2010AccountRecordingRecordingAddOnResult withDateCompleted(String dateCompleted) {
        this.dateCompleted = dateCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountRecordingRecordingAddOnResult withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountRecordingRecordingAddOnResult withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference_sid")
    public String referenceSid;
    public ApiV2010AccountRecordingRecordingAddOnResult withReferenceSid(String referenceSid) {
        this.referenceSid = referenceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountRecordingRecordingAddOnResult withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RecordingAddOnResultEnumStatusEnum status;
    public ApiV2010AccountRecordingRecordingAddOnResult withStatus(RecordingAddOnResultEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource_uris")
    public java.util.Map<String, Object> subresourceUris;
    public ApiV2010AccountRecordingRecordingAddOnResult withSubresourceUris(java.util.Map<String, Object> subresourceUris) {
        this.subresourceUris = subresourceUris;
        return this;
    }
}