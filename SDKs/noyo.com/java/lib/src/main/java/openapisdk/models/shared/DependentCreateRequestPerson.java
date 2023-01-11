package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentCreateRequestPerson
 * Personal information for the dependent
**/
public class DependentCreateRequestPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public DependentCreateRequestPersonContact contact;
    public DependentCreateRequestPerson withContact(DependentCreateRequestPersonContact contact) {
        this.contact = contact;
        return this;
    }
    @JsonProperty("date_of_birth")
    public LocalDate dateOfBirth;
    public DependentCreateRequestPerson withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public DependentCreateRequestPersonDetails details;
    public DependentCreateRequestPerson withDetails(DependentCreateRequestPersonDetails details) {
        this.details = details;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public DependentCreateRequestPerson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_address")
    public DependentCreateRequestPersonHomeAddress homeAddress;
    public DependentCreateRequestPerson withHomeAddress(DependentCreateRequestPersonHomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public DependentCreateRequestPerson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailing_address")
    public DependentCreateRequestPersonMailingAddress mailingAddress;
    public DependentCreateRequestPerson withMailingAddress(DependentCreateRequestPersonMailingAddress mailingAddress) {
        this.mailingAddress = mailingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marital_status")
    public DependentCreateRequestPersonMaritalStatusEnum maritalStatus;
    public DependentCreateRequestPerson withMaritalStatus(DependentCreateRequestPersonMaritalStatusEnum maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public DependentCreateRequestPerson withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonProperty("sex")
    public DependentCreateRequestPersonSexEnum sex;
    public DependentCreateRequestPerson withSex(DependentCreateRequestPersonSexEnum sex) {
        this.sex = sex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public DependentCreateRequestPerson withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public DependentCreateRequestPerson withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}