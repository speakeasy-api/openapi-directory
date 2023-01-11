package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeCreateRequestPersonDetails
 * Additional personal details of the person
**/
public class EmployeeCreateRequestPersonDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("american_indian")
    public EmployeeCreateRequestPersonDetailsAmericanIndian americanIndian;
    public EmployeeCreateRequestPersonDetails withAmericanIndian(EmployeeCreateRequestPersonDetailsAmericanIndian americanIndian) {
        this.americanIndian = americanIndian;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disability")
    public EmployeeCreateRequestPersonDetailsDisability disability;
    public EmployeeCreateRequestPersonDetails withDisability(EmployeeCreateRequestPersonDetailsDisability disability) {
        this.disability = disability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_military")
    public Boolean isMilitary;
    public EmployeeCreateRequestPersonDetails withIsMilitary(Boolean isMilitary) {
        this.isMilitary = isMilitary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_student")
    public Boolean isStudent;
    public EmployeeCreateRequestPersonDetails withIsStudent(Boolean isStudent) {
        this.isStudent = isStudent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tobacco")
    public EmployeeCreateRequestPersonDetailsTobacco tobacco;
    public EmployeeCreateRequestPersonDetails withTobacco(EmployeeCreateRequestPersonDetailsTobacco tobacco) {
        this.tobacco = tobacco;
        return this;
    }
}