package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyLocationRequest
 * Request message for Verifications.VerifyLocation.
**/
public class VerifyLocationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ServiceBusinessContext context;
    public VerifyLocationRequest withContext(ServiceBusinessContext context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public VerifyLocationRequest withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public VerifyLocationRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailerContact")
    public String mailerContact;
    public VerifyLocationRequest withMailerContact(String mailerContact) {
        this.mailerContact = mailerContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public VerifyLocationRequestMethodEnum method;
    public VerifyLocationRequest withMethod(VerifyLocationRequestMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public VerifyLocationRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public VerificationToken token;
    public VerifyLocationRequest withToken(VerificationToken token) {
        this.token = token;
        return this;
    }
}