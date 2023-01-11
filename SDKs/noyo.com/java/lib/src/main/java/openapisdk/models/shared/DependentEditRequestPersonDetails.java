package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentEditRequestPersonDetails
 * Additional personal details of the person
**/
public class DependentEditRequestPersonDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("american_indian")
    public DependentEditRequestPersonDetailsAmericanIndian americanIndian;
    public DependentEditRequestPersonDetails withAmericanIndian(DependentEditRequestPersonDetailsAmericanIndian americanIndian) {
        this.americanIndian = americanIndian;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disability")
    public DependentEditRequestPersonDetailsDisability disability;
    public DependentEditRequestPersonDetails withDisability(DependentEditRequestPersonDetailsDisability disability) {
        this.disability = disability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_military")
    public Boolean isMilitary;
    public DependentEditRequestPersonDetails withIsMilitary(Boolean isMilitary) {
        this.isMilitary = isMilitary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_student")
    public Boolean isStudent;
    public DependentEditRequestPersonDetails withIsStudent(Boolean isStudent) {
        this.isStudent = isStudent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tobacco")
    public DependentEditRequestPersonDetailsTobacco tobacco;
    public DependentEditRequestPersonDetails withTobacco(DependentEditRequestPersonDetailsTobacco tobacco) {
        this.tobacco = tobacco;
        return this;
    }
}