package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestPerson
 * Personal information for the employee
**/
public class EmployeeEditRequestPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public EmployeeEditRequestPersonContact contact;
    public EmployeeEditRequestPerson withContact(EmployeeEditRequestPersonContact contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_of_birth")
    public LocalDate dateOfBirth;
    public EmployeeEditRequestPerson withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public EmployeeEditRequestPersonDetails details;
    public EmployeeEditRequestPerson withDetails(EmployeeEditRequestPersonDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public EmployeeEditRequestPerson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_address")
    public EmployeeEditRequestPersonHomeAddress homeAddress;
    public EmployeeEditRequestPerson withHomeAddress(EmployeeEditRequestPersonHomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public EmployeeEditRequestPerson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailing_address")
    public EmployeeEditRequestPersonMailingAddress mailingAddress;
    public EmployeeEditRequestPerson withMailingAddress(EmployeeEditRequestPersonMailingAddress mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marital_status")
    public EmployeeEditRequestPersonMaritalStatusEnum maritalStatus;
    public EmployeeEditRequestPerson withMaritalStatus(EmployeeEditRequestPersonMaritalStatusEnum maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public EmployeeEditRequestPerson withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sex")
    public EmployeeEditRequestPersonSexEnum sex;
    public EmployeeEditRequestPerson withSex(EmployeeEditRequestPersonSexEnum sex) {
        this.sex = sex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public EmployeeEditRequestPerson withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public EmployeeEditRequestPerson withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}