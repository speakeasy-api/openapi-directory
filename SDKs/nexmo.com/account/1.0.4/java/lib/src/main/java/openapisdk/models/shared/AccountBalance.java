package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountBalance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoReload")
    public Boolean autoReload;
    public AccountBalance withAutoReload(Boolean autoReload) {
        this.autoReload = autoReload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public AccountBalance withValue(Double value) {
        this.value = value;
        return this;
    }
}