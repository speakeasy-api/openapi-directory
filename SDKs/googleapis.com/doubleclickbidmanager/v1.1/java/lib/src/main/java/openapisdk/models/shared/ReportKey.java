package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportKey
 * Key used to identify a report.
**/
public class ReportKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryId")
    public String queryId;
    public ReportKey withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportId")
    public String reportId;
    public ReportKey withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}