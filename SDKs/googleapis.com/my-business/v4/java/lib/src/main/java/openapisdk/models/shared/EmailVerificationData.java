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
    @JsonProperty("domainName")
    public String domainName;
    public EmailVerificationData withDomainName(String domainName) {
        this.domainName = domainName;
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
    @JsonProperty("userName")
    public String userName;
    public EmailVerificationData withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}