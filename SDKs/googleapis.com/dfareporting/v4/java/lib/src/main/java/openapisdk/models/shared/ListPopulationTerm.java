package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPopulationTerm
 * Remarketing List Population Rule Term.
**/
public class ListPopulationTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contains")
    public Boolean contains;
    public ListPopulationTerm withContains(Boolean contains) {
        this.contains = contains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negation")
    public Boolean negation;
    public ListPopulationTerm withNegation(Boolean negation) {
        this.negation = negation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public ListPopulationTermOperatorEnum operator;
    public ListPopulationTerm withOperator(ListPopulationTermOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remarketingListId")
    public String remarketingListId;
    public ListPopulationTerm withRemarketingListId(String remarketingListId) {
        this.remarketingListId = remarketingListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListPopulationTermTypeEnum type;
    public ListPopulationTerm withType(ListPopulationTermTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ListPopulationTerm withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variableFriendlyName")
    public String variableFriendlyName;
    public ListPopulationTerm withVariableFriendlyName(String variableFriendlyName) {
        this.variableFriendlyName = variableFriendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variableName")
    public String variableName;
    public ListPopulationTerm withVariableName(String variableName) {
        this.variableName = variableName;
        return this;
    }
}