package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentEditRequestPerson
 * Personal information for the dependent
**/
public class DependentEditRequestPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public DependentEditRequestPersonContact contact;
    public DependentEditRequestPerson withContact(DependentEditRequestPersonContact contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_of_birth")
    public LocalDate dateOfBirth;
    public DependentEditRequestPerson withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public DependentEditRequestPersonDetails details;
    public DependentEditRequestPerson withDetails(DependentEditRequestPersonDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public DependentEditRequestPerson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_address")
    public DependentEditRequestPersonHomeAddress homeAddress;
    public DependentEditRequestPerson withHomeAddress(DependentEditRequestPersonHomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public DependentEditRequestPerson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailing_address")
    public DependentEditRequestPersonMailingAddress mailingAddress;
    public DependentEditRequestPerson withMailingAddress(DependentEditRequestPersonMailingAddress mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marital_status")
    public DependentEditRequestPersonMaritalStatusEnum maritalStatus;
    public DependentEditRequestPerson withMaritalStatus(DependentEditRequestPersonMaritalStatusEnum maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public DependentEditRequestPerson withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sex")
    public DependentEditRequestPersonSexEnum sex;
    public DependentEditRequestPerson withSex(DependentEditRequestPersonSexEnum sex) {
        this.sex = sex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public DependentEditRequestPerson withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public DependentEditRequestPerson withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}