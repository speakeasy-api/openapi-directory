package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportDefinition")
    public ReportDefinitionReportDefinition reportDefinition;
    public ReportDefinition withReportDefinition(ReportDefinitionReportDefinition reportDefinition) {
        this.reportDefinition = reportDefinition;
        return this;
    }
}