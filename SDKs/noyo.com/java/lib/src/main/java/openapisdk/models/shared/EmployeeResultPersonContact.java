package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultPersonContact
 * Contact information for the person
**/
public class EmployeeResultPersonContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address")
    public String emailAddress;
    public EmployeeResultPersonContact withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_address_type")
    public EmployeeResultPersonContactEmailAddressTypeEnum emailAddressType;
    public EmployeeResultPersonContact withEmailAddressType(EmployeeResultPersonContactEmailAddressTypeEnum emailAddressType) {
        this.emailAddressType = emailAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_phone")
    public String homePhone;
    public EmployeeResultPersonContact withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_language")
    public String preferredLanguage;
    public EmployeeResultPersonContact withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_method")
    public EmployeeResultPersonContactPreferredMethodEnum preferredMethod;
    public EmployeeResultPersonContact withPreferredMethod(EmployeeResultPersonContactPreferredMethodEnum preferredMethod) {
        this.preferredMethod = preferredMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaks_english")
    public Boolean speaksEnglish;
    public EmployeeResultPersonContact withSpeaksEnglish(Boolean speaksEnglish) {
        this.speaksEnglish = speaksEnglish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("work_phone")
    public String workPhone;
    public EmployeeResultPersonContact withWorkPhone(String workPhone) {
        this.workPhone = workPhone;
        return this;
    }
}