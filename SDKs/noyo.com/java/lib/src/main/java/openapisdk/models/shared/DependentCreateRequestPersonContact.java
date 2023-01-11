package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentCreateRequestPersonContact
 * Contact information for the person
**/
public class DependentCreateRequestPersonContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address")
    public String emailAddress;
    public DependentCreateRequestPersonContact withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address_type")
    public DependentCreateRequestPersonContactEmailAddressTypeEnum emailAddressType;
    public DependentCreateRequestPersonContact withEmailAddressType(DependentCreateRequestPersonContactEmailAddressTypeEnum emailAddressType) {
        this.emailAddressType = emailAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_phone")
    public String homePhone;
    public DependentCreateRequestPersonContact withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_language")
    public String preferredLanguage;
    public DependentCreateRequestPersonContact withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_method")
    public DependentCreateRequestPersonContactPreferredMethodEnum preferredMethod;
    public DependentCreateRequestPersonContact withPreferredMethod(DependentCreateRequestPersonContactPreferredMethodEnum preferredMethod) {
        this.preferredMethod = preferredMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaks_english")
    public Boolean speaksEnglish;
    public DependentCreateRequestPersonContact withSpeaksEnglish(Boolean speaksEnglish) {
        this.speaksEnglish = speaksEnglish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("work_phone")
    public String workPhone;
    public DependentCreateRequestPersonContact withWorkPhone(String workPhone) {
        this.workPhone = workPhone;
        return this;
    }
}