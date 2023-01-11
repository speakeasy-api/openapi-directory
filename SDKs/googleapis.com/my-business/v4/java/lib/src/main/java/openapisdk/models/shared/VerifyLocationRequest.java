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
    @JsonProperty("addressInput")
    public AddressInput addressInput;
    public VerifyLocationRequest withAddressInput(AddressInput addressInput) {
        this.addressInput = addressInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ServiceBusinessContext context;
    public VerifyLocationRequest withContext(ServiceBusinessContext context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailInput")
    public EmailInput emailInput;
    public VerifyLocationRequest withEmailInput(EmailInput emailInput) {
        this.emailInput = emailInput;
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
    @JsonProperty("method")
    public VerifyLocationRequestMethodEnum method;
    public VerifyLocationRequest withMethod(VerifyLocationRequestMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneInput")
    public PhoneInput phoneInput;
    public VerifyLocationRequest withPhoneInput(PhoneInput phoneInput) {
        this.phoneInput = phoneInput;
        return this;
    }
}