package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentResultPerson
 * Personal information for the dependent
**/
public class DependentResultPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public DependentResultPersonContact contact;
    public DependentResultPerson withContact(DependentResultPersonContact contact) {
        this.contact = contact;
        return this;
    }
    @JsonProperty("date_of_birth")
    public LocalDate dateOfBirth;
    public DependentResultPerson withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public DependentResultPersonDetails details;
    public DependentResultPerson withDetails(DependentResultPersonDetails details) {
        this.details = details;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public DependentResultPerson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_address")
    public DependentResultPersonHomeAddress homeAddress;
    public DependentResultPerson withHomeAddress(DependentResultPersonHomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public DependentResultPerson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailing_address")
    public DependentResultPersonMailingAddress mailingAddress;
    public DependentResultPerson withMailingAddress(DependentResultPersonMailingAddress mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marital_status")
    public DependentResultPersonMaritalStatusEnum maritalStatus;
    public DependentResultPerson withMaritalStatus(DependentResultPersonMaritalStatusEnum maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public DependentResultPerson withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonProperty("sex")
    public DependentResultPersonSexEnum sex;
    public DependentResultPerson withSex(DependentResultPersonSexEnum sex) {
        this.sex = sex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public DependentResultPerson withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public DependentResultPerson withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}