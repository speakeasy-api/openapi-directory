package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuthMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiry")
    public String expiry;
    public AuthMeta withExpiry(String expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hint")
    public String hint;
    public AuthMeta withHint(String hint) {
        this.hint = hint;
        return this;
    }
}