package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averages")
    public String[] averages;
    public Report withAverages(String[] averages) {
        this.averages = averages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public ReportHeaders[] headers;
    public Report withHeaders(ReportHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Report withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public String[][] rows;
    public Report withRows(String[][] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalMatchedRows")
    public String totalMatchedRows;
    public Report withTotalMatchedRows(String totalMatchedRows) {
        this.totalMatchedRows = totalMatchedRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totals")
    public String[] totals;
    public Report withTotals(String[] totals) {
        this.totals = totals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public String[] warnings;
    public Report withWarnings(String[] warnings) {
        this.warnings = warnings;
        return this;
    }
}