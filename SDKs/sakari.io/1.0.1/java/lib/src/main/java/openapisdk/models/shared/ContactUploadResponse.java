package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContactUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ContactUploadResponseData data;
    public ContactUploadResponse withData(ContactUploadResponseData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ContactUploadResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}