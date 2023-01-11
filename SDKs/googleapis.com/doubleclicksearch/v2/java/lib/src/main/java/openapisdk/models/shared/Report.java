package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Report
 * A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.
**/
public class Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public ReportFiles[] files;
    public Report withFiles(ReportFiles[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Report withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReportReady")
    public Boolean isReportReady;
    public Report withIsReportReady(Boolean isReportReady) {
        this.isReportReady = isReportReady;
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
    @JsonProperty("request")
    public ReportRequest request;
    public Report withRequest(ReportRequest request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowCount")
    public Integer rowCount;
    public Report withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public java.util.Map<String, Object>[] rows;
    public Report withRows(java.util.Map<String, Object>[] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statisticsCurrencyCode")
    public String statisticsCurrencyCode;
    public Report withStatisticsCurrencyCode(String statisticsCurrencyCode) {
        this.statisticsCurrencyCode = statisticsCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statisticsTimeZone")
    public String statisticsTimeZone;
    public Report withStatisticsTimeZone(String statisticsTimeZone) {
        this.statisticsTimeZone = statisticsTimeZone;
        return this;
    }
}