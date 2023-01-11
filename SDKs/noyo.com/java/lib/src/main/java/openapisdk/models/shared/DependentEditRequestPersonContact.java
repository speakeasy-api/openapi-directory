package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentEditRequestPersonContact
 * Contact information for the person
**/
public class DependentEditRequestPersonContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address")
    public String emailAddress;
    public DependentEditRequestPersonContact withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address_type")
    public DependentEditRequestPersonContactEmailAddressTypeEnum emailAddressType;
    public DependentEditRequestPersonContact withEmailAddressType(DependentEditRequestPersonContactEmailAddressTypeEnum emailAddressType) {
        this.emailAddressType = emailAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_phone")
    public String homePhone;
    public DependentEditRequestPersonContact withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_language")
    public String preferredLanguage;
    public DependentEditRequestPersonContact withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_method")
    public DependentEditRequestPersonContactPreferredMethodEnum preferredMethod;
    public DependentEditRequestPersonContact withPreferredMethod(DependentEditRequestPersonContactPreferredMethodEnum preferredMethod) {
        this.preferredMethod = preferredMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaks_english")
    public Boolean speaksEnglish;
    public DependentEditRequestPersonContact withSpeaksEnglish(Boolean speaksEnglish) {
        this.speaksEnglish = speaksEnglish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("work_phone")
    public String workPhone;
    public DependentEditRequestPersonContact withWorkPhone(String workPhone) {
        this.workPhone = workPhone;
        return this;
    }
}