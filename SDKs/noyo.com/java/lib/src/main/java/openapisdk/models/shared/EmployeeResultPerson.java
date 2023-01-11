package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultPerson
 * Personal information for the employee
**/
public class EmployeeResultPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public EmployeeResultPersonContact contact;
    public EmployeeResultPerson withContact(EmployeeResultPersonContact contact) {
        this.contact = contact;
        return this;
    }
    @JsonProperty("date_of_birth")
    public LocalDate dateOfBirth;
    public EmployeeResultPerson withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public EmployeeResultPersonDetails details;
    public EmployeeResultPerson withDetails(EmployeeResultPersonDetails details) {
        this.details = details;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public EmployeeResultPerson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_address")
    public EmployeeResultPersonHomeAddress homeAddress;
    public EmployeeResultPerson withHomeAddress(EmployeeResultPersonHomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public EmployeeResultPerson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailing_address")
    public EmployeeResultPersonMailingAddress mailingAddress;
    public EmployeeResultPerson withMailingAddress(EmployeeResultPersonMailingAddress mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marital_status")
    public EmployeeResultPersonMaritalStatusEnum maritalStatus;
    public EmployeeResultPerson withMaritalStatus(EmployeeResultPersonMaritalStatusEnum maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public EmployeeResultPerson withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonProperty("sex")
    public EmployeeResultPersonSexEnum sex;
    public EmployeeResultPerson withSex(EmployeeResultPersonSexEnum sex) {
        this.sex = sex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public EmployeeResultPerson withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public EmployeeResultPerson withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}