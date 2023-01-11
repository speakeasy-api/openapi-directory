package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_on_configuration_sid")
    public String addOnConfigurationSid;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withAddOnConfigurationSid(String addOnConfigurationSid) {
        this.addOnConfigurationSid = addOnConfigurationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_on_result_sid")
    public String addOnResultSid;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withAddOnResultSid(String addOnResultSid) {
        this.addOnResultSid = addOnResultSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_on_sid")
    public String addOnSid;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withAddOnSid(String addOnSid) {
        this.addOnSid = addOnSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference_sid")
    public String referenceSid;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withReferenceSid(String referenceSid) {
        this.referenceSid = referenceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource_uris")
    public java.util.Map<String, Object> subresourceUris;
    public ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload withSubresourceUris(java.util.Map<String, Object> subresourceUris) {
        this.subresourceUris = subresourceUris;
        return this;
    }
}