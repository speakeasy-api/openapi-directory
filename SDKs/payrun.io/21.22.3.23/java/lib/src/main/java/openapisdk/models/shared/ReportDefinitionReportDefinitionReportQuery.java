package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportDefinitionReportDefinitionReportQuery
 * The report definitions' report query
**/
public class ReportDefinitionReportDefinitionReportQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludeNullOrEmptyElements")
    public Boolean excludeNullOrEmptyElements;
    public ReportDefinitionReportDefinitionReportQuery withExcludeNullOrEmptyElements(Boolean excludeNullOrEmptyElements) {
        this.excludeNullOrEmptyElements = excludeNullOrEmptyElements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Groups")
    public ReportDefinitionReportDefinitionReportQueryGroup groups;
    public ReportDefinitionReportDefinitionReportQuery withGroups(ReportDefinitionReportDefinitionReportQueryGroup groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootNodeName")
    public String rootNodeName;
    public ReportDefinitionReportDefinitionReportQuery withRootNodeName(String rootNodeName) {
        this.rootNodeName = rootNodeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressMetricAttributes")
    public Boolean suppressMetricAttributes;
    public ReportDefinitionReportDefinitionReportQuery withSuppressMetricAttributes(Boolean suppressMetricAttributes) {
        this.suppressMetricAttributes = suppressMetricAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variables")
    public ReportDefinitionReportDefinitionReportQueryVariable variables;
    public ReportDefinitionReportDefinitionReportQuery withVariables(ReportDefinitionReportDefinitionReportQueryVariable variables) {
        this.variables = variables;
        return this;
    }
}