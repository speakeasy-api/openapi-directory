package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestPersonContact
 * Contact information for the person
**/
public class EmployeeEditRequestPersonContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address")
    public String emailAddress;
    public EmployeeEditRequestPersonContact withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address_type")
    public EmployeeEditRequestPersonContactEmailAddressTypeEnum emailAddressType;
    public EmployeeEditRequestPersonContact withEmailAddressType(EmployeeEditRequestPersonContactEmailAddressTypeEnum emailAddressType) {
        this.emailAddressType = emailAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_phone")
    public String homePhone;
    public EmployeeEditRequestPersonContact withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_language")
    public String preferredLanguage;
    public EmployeeEditRequestPersonContact withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_method")
    public EmployeeEditRequestPersonContactPreferredMethodEnum preferredMethod;
    public EmployeeEditRequestPersonContact withPreferredMethod(EmployeeEditRequestPersonContactPreferredMethodEnum preferredMethod) {
        this.preferredMethod = preferredMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaks_english")
    public Boolean speaksEnglish;
    public EmployeeEditRequestPersonContact withSpeaksEnglish(Boolean speaksEnglish) {
        this.speaksEnglish = speaksEnglish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("work_phone")
    public String workPhone;
    public EmployeeEditRequestPersonContact withWorkPhone(String workPhone) {
        this.workPhone = workPhone;
        return this;
    }
}