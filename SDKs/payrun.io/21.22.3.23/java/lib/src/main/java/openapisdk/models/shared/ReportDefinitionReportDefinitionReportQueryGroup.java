package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportDefinitionReportDefinitionReportQueryGroup
 * The querys' groups
**/
public class ReportDefinitionReportDefinitionReportQueryGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Group")
    public Object[] group;
    public ReportDefinitionReportDefinitionReportQueryGroup withGroup(Object[] group) {
        this.group = group;
        return this;
    }
}