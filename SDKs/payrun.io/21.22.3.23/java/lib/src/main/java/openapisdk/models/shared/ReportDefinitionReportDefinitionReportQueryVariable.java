package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportDefinitionReportDefinitionReportQueryVariable
 * The querys' variables
**/
public class ReportDefinitionReportDefinitionReportQueryVariable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variable")
    public Object[] variable;
    public ReportDefinitionReportDefinitionReportQueryVariable withVariable(Object[] variable) {
        this.variable = variable;
        return this;
    }
}