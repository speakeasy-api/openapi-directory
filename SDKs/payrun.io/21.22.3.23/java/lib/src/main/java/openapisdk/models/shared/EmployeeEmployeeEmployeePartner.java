package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEmployeeEmployeePartner
 * The employees' employee partner
**/
public class EmployeeEmployeeEmployeePartner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public EmployeeEmployeeEmployeePartner withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Initials")
    public String initials;
    public EmployeeEmployeeEmployeePartner withInitials(String initials) {
        this.initials = initials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public EmployeeEmployeeEmployeePartner withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MiddleName")
    public String middleName;
    public EmployeeEmployeeEmployeePartner withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NiNumber")
    public String niNumber;
    public EmployeeEmployeeEmployeePartner withNiNumber(String niNumber) {
        this.niNumber = niNumber;
        return this;
    }
}