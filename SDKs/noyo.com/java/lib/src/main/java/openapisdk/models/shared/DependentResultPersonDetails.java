package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentResultPersonDetails
 * Additional personal details of the person
**/
public class DependentResultPersonDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("american_indian")
    public DependentResultPersonDetailsAmericanIndian americanIndian;
    public DependentResultPersonDetails withAmericanIndian(DependentResultPersonDetailsAmericanIndian americanIndian) {
        this.americanIndian = americanIndian;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disability")
    public DependentResultPersonDetailsDisability disability;
    public DependentResultPersonDetails withDisability(DependentResultPersonDetailsDisability disability) {
        this.disability = disability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_military")
    public Boolean isMilitary;
    public DependentResultPersonDetails withIsMilitary(Boolean isMilitary) {
        this.isMilitary = isMilitary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_student")
    public Boolean isStudent;
    public DependentResultPersonDetails withIsStudent(Boolean isStudent) {
        this.isStudent = isStudent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tobacco")
    public DependentResultPersonDetailsTobacco tobacco;
    public DependentResultPersonDetails withTobacco(DependentResultPersonDetailsTobacco tobacco) {
        this.tobacco = tobacco;
        return this;
    }
}