package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeCreateRequestPerson
 * Personal information for the employee
**/
public class EmployeeCreateRequestPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public EmployeeCreateRequestPersonContact contact;
    public EmployeeCreateRequestPerson withContact(EmployeeCreateRequestPersonContact contact) {
        this.contact = contact;
        return this;
    }
    @JsonProperty("date_of_birth")
    public LocalDate dateOfBirth;
    public EmployeeCreateRequestPerson withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public EmployeeCreateRequestPersonDetails details;
    public EmployeeCreateRequestPerson withDetails(EmployeeCreateRequestPersonDetails details) {
        this.details = details;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public EmployeeCreateRequestPerson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_address")
    public EmployeeCreateRequestPersonHomeAddress homeAddress;
    public EmployeeCreateRequestPerson withHomeAddress(EmployeeCreateRequestPersonHomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public EmployeeCreateRequestPerson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailing_address")
    public EmployeeCreateRequestPersonMailingAddress mailingAddress;
    public EmployeeCreateRequestPerson withMailingAddress(EmployeeCreateRequestPersonMailingAddress mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marital_status")
    public EmployeeCreateRequestPersonMaritalStatusEnum maritalStatus;
    public EmployeeCreateRequestPerson withMaritalStatus(EmployeeCreateRequestPersonMaritalStatusEnum maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public EmployeeCreateRequestPerson withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonProperty("sex")
    public EmployeeCreateRequestPersonSexEnum sex;
    public EmployeeCreateRequestPerson withSex(EmployeeCreateRequestPersonSexEnum sex) {
        this.sex = sex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public EmployeeCreateRequestPerson withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public EmployeeCreateRequestPerson withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}