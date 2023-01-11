package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultPersonDetails
 * Additional personal details of the person
**/
public class EmployeeResultPersonDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("american_indian")
    public EmployeeResultPersonDetailsAmericanIndian americanIndian;
    public EmployeeResultPersonDetails withAmericanIndian(EmployeeResultPersonDetailsAmericanIndian americanIndian) {
        this.americanIndian = americanIndian;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disability")
    public EmployeeResultPersonDetailsDisability disability;
    public EmployeeResultPersonDetails withDisability(EmployeeResultPersonDetailsDisability disability) {
        this.disability = disability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_military")
    public Boolean isMilitary;
    public EmployeeResultPersonDetails withIsMilitary(Boolean isMilitary) {
        this.isMilitary = isMilitary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_student")
    public Boolean isStudent;
    public EmployeeResultPersonDetails withIsStudent(Boolean isStudent) {
        this.isStudent = isStudent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tobacco")
    public EmployeeResultPersonDetailsTobacco tobacco;
    public EmployeeResultPersonDetails withTobacco(EmployeeResultPersonDetailsTobacco tobacco) {
        this.tobacco = tobacco;
        return this;
    }
}