package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GpgKeyEmails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GpgKeyEmails withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Boolean verified;
    public GpgKeyEmails withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}