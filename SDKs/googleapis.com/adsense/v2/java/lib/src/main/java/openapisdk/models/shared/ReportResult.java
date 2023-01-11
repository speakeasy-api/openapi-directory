package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportResult
 * Result of a generated report.
**/
public class ReportResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averages")
    public Row averages;
    public ReportResult withAverages(Row averages) {
        this.averages = averages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public Date endDate;
    public ReportResult withEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public Header[] headers;
    public ReportResult withHeaders(Header[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public Row[] rows;
    public ReportResult withRows(Row[] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public Date startDate;
    public ReportResult withStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalMatchedRows")
    public String totalMatchedRows;
    public ReportResult withTotalMatchedRows(String totalMatchedRows) {
        this.totalMatchedRows = totalMatchedRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totals")
    public Row totals;
    public ReportResult withTotals(Row totals) {
        this.totals = totals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public String[] warnings;
    public ReportResult withWarnings(String[] warnings) {
        this.warnings = warnings;
        return this;
    }
}