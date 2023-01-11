package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportLine")
    public ReportLineReportLine reportLine;
    public ReportLine withReportLine(ReportLineReportLine reportLine) {
        this.reportLine = reportLine;
        return this;
    }
}