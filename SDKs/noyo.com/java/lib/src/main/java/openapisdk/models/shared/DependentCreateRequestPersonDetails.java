package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentCreateRequestPersonDetails
 * Additional personal details of the person
**/
public class DependentCreateRequestPersonDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("american_indian")
    public DependentCreateRequestPersonDetailsAmericanIndian americanIndian;
    public DependentCreateRequestPersonDetails withAmericanIndian(DependentCreateRequestPersonDetailsAmericanIndian americanIndian) {
        this.americanIndian = americanIndian;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disability")
    public DependentCreateRequestPersonDetailsDisability disability;
    public DependentCreateRequestPersonDetails withDisability(DependentCreateRequestPersonDetailsDisability disability) {
        this.disability = disability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_military")
    public Boolean isMilitary;
    public DependentCreateRequestPersonDetails withIsMilitary(Boolean isMilitary) {
        this.isMilitary = isMilitary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_student")
    public Boolean isStudent;
    public DependentCreateRequestPersonDetails withIsStudent(Boolean isStudent) {
        this.isStudent = isStudent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tobacco")
    public DependentCreateRequestPersonDetailsTobacco tobacco;
    public DependentCreateRequestPersonDetails withTobacco(DependentCreateRequestPersonDetailsTobacco tobacco) {
        this.tobacco = tobacco;
        return this;
    }
}