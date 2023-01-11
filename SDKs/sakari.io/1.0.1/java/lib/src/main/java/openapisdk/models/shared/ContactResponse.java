package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContactResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Contact data;
    public ContactResponse withData(Contact data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ContactResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}