package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestPersonDetails
 * Additional personal details of the person
**/
public class EmployeeEditRequestPersonDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("american_indian")
    public EmployeeEditRequestPersonDetailsAmericanIndian americanIndian;
    public EmployeeEditRequestPersonDetails withAmericanIndian(EmployeeEditRequestPersonDetailsAmericanIndian americanIndian) {
        this.americanIndian = americanIndian;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disability")
    public EmployeeEditRequestPersonDetailsDisability disability;
    public EmployeeEditRequestPersonDetails withDisability(EmployeeEditRequestPersonDetailsDisability disability) {
        this.disability = disability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_military")
    public Boolean isMilitary;
    public EmployeeEditRequestPersonDetails withIsMilitary(Boolean isMilitary) {
        this.isMilitary = isMilitary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_student")
    public Boolean isStudent;
    public EmployeeEditRequestPersonDetails withIsStudent(Boolean isStudent) {
        this.isStudent = isStudent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tobacco")
    public EmployeeEditRequestPersonDetailsTobacco tobacco;
    public EmployeeEditRequestPersonDetails withTobacco(EmployeeEditRequestPersonDetailsTobacco tobacco) {
        this.tobacco = tobacco;
        return this;
    }
}