package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterDomainRequestInput
 * Request for the `RegisterDomain` method.
**/
public class RegisterDomainRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactNotices")
    public RegisterDomainRequestContactNoticesEnum[] contactNotices;
    public RegisterDomainRequestInput withContactNotices(RegisterDomainRequestContactNoticesEnum[] contactNotices) {
        this.contactNotices = contactNotices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainNotices")
    public RegisterDomainRequestDomainNoticesEnum[] domainNotices;
    public RegisterDomainRequestInput withDomainNotices(RegisterDomainRequestDomainNoticesEnum[] domainNotices) {
        this.domainNotices = domainNotices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration")
    public RegistrationInput registration;
    public RegisterDomainRequestInput withRegistration(RegistrationInput registration) {
        this.registration = registration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public RegisterDomainRequestInput withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yearlyPrice")
    public Money yearlyPrice;
    public RegisterDomainRequestInput withYearlyPrice(Money yearlyPrice) {
        this.yearlyPrice = yearlyPrice;
        return this;
    }
}