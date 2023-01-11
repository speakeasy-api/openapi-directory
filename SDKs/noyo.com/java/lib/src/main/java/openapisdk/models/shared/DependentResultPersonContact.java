package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentResultPersonContact
 * Contact information for the person
**/
public class DependentResultPersonContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address")
    public String emailAddress;
    public DependentResultPersonContact withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address_type")
    public DependentResultPersonContactEmailAddressTypeEnum emailAddressType;
    public DependentResultPersonContact withEmailAddressType(DependentResultPersonContactEmailAddressTypeEnum emailAddressType) {
        this.emailAddressType = emailAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_phone")
    public String homePhone;
    public DependentResultPersonContact withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_language")
    public String preferredLanguage;
    public DependentResultPersonContact withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_method")
    public DependentResultPersonContactPreferredMethodEnum preferredMethod;
    public DependentResultPersonContact withPreferredMethod(DependentResultPersonContactPreferredMethodEnum preferredMethod) {
        this.preferredMethod = preferredMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaks_english")
    public Boolean speaksEnglish;
    public DependentResultPersonContact withSpeaksEnglish(Boolean speaksEnglish) {
        this.speaksEnglish = speaksEnglish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("work_phone")
    public String workPhone;
    public DependentResultPersonContact withWorkPhone(String workPhone) {
        this.workPhone = workPhone;
        return this;
    }
}