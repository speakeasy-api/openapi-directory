package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailInput
 * Input for EMAIL verification.
**/
public class EmailInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public EmailInput withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
}