package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransferDomainRequestInput
 * Request for the `TransferDomain` method.
**/
public class TransferDomainRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationCode")
    public AuthorizationCode authorizationCode;
    public TransferDomainRequestInput withAuthorizationCode(AuthorizationCode authorizationCode) {
        this.authorizationCode = authorizationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactNotices")
    public TransferDomainRequestContactNoticesEnum[] contactNotices;
    public TransferDomainRequestInput withContactNotices(TransferDomainRequestContactNoticesEnum[] contactNotices) {
        this.contactNotices = contactNotices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration")
    public RegistrationInput registration;
    public TransferDomainRequestInput withRegistration(RegistrationInput registration) {
        this.registration = registration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public TransferDomainRequestInput withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yearlyPrice")
    public Money yearlyPrice;
    public TransferDomainRequestInput withYearlyPrice(Money yearlyPrice) {
        this.yearlyPrice = yearlyPrice;
        return this;
    }
}