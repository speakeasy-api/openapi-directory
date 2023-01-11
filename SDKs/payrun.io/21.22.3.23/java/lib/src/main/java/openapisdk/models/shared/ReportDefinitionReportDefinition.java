package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportDefinitionReportDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean active;
    public ReportDefinitionReportDefinition withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Readonly")
    public Boolean readonly;
    public ReportDefinitionReportDefinition withReadonly(Boolean readonly) {
        this.readonly = readonly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportQuery")
    public ReportDefinitionReportDefinitionReportQuery reportQuery;
    public ReportDefinitionReportDefinition withReportQuery(ReportDefinitionReportDefinitionReportQuery reportQuery) {
        this.reportQuery = reportQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportedTransforms")
    public String supportedTransforms;
    public ReportDefinitionReportDefinition withSupportedTransforms(String supportedTransforms) {
        this.supportedTransforms = supportedTransforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public ReportDefinitionReportDefinition withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public ReportDefinitionReportDefinition withVersion(String version) {
        this.version = version;
        return this;
    }
}