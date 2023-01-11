package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailVerificationData
 * Display data for verifications through email.
**/
public class EmailVerificationData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public EmailVerificationData withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUserNameEditable")
    public Boolean isUserNameEditable;
    public EmailVerificationData withIsUserNameEditable(Boolean isUserNameEditable) {
        this.isUserNameEditable = isUserNameEditable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public EmailVerificationData withUser(String user) {
        this.user = user;
        return this;
    }
}