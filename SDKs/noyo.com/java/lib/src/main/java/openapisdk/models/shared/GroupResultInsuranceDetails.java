package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupResultInsuranceDetails
 * General details about the group insurance offerings
**/
public class GroupResultInsuranceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_erisa_compliant")
    public Boolean isErisaCompliant;
    public GroupResultInsuranceDetails withIsErisaCompliant(Boolean isErisaCompliant) {
        this.isErisaCompliant = isErisaCompliant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_erisa_subject")
    public Boolean isErisaSubject;
    public GroupResultInsuranceDetails withIsErisaSubject(Boolean isErisaSubject) {
        this.isErisaSubject = isErisaSubject;
        return this;
    }
}