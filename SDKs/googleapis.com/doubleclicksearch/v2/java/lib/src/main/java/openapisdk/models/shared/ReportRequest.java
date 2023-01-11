package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportRequest
 * A request object used to create a DoubleClick Search report.
**/
public class ReportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public ReportApiColumnSpec[] columns;
    public ReportRequest withColumns(ReportApiColumnSpec[] columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadFormat")
    public String downloadFormat;
    public ReportRequest withDownloadFormat(String downloadFormat) {
        this.downloadFormat = downloadFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public ReportRequestFilters[] filters;
    public ReportRequest withFilters(ReportRequestFilters[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeDeletedEntities")
    public Boolean includeDeletedEntities;
    public ReportRequest withIncludeDeletedEntities(Boolean includeDeletedEntities) {
        this.includeDeletedEntities = includeDeletedEntities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeRemovedEntities")
    public Boolean includeRemovedEntities;
    public ReportRequest withIncludeRemovedEntities(Boolean includeRemovedEntities) {
        this.includeRemovedEntities = includeRemovedEntities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRowsPerFile")
    public Integer maxRowsPerFile;
    public ReportRequest withMaxRowsPerFile(Integer maxRowsPerFile) {
        this.maxRowsPerFile = maxRowsPerFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public ReportRequestOrderBy[] orderBy;
    public ReportRequest withOrderBy(ReportRequestOrderBy[] orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportScope")
    public ReportRequestReportScope reportScope;
    public ReportRequest withReportScope(ReportRequestReportScope reportScope) {
        this.reportScope = reportScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportType")
    public String reportType;
    public ReportRequest withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowCount")
    public Integer rowCount;
    public ReportRequest withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startRow")
    public Integer startRow;
    public ReportRequest withStartRow(Integer startRow) {
        this.startRow = startRow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statisticsCurrency")
    public String statisticsCurrency;
    public ReportRequest withStatisticsCurrency(String statisticsCurrency) {
        this.statisticsCurrency = statisticsCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public ReportRequestTimeRange timeRange;
    public ReportRequest withTimeRange(ReportRequestTimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifySingleTimeZone")
    public Boolean verifySingleTimeZone;
    public ReportRequest withVerifySingleTimeZone(Boolean verifySingleTimeZone) {
        this.verifySingleTimeZone = verifySingleTimeZone;
        return this;
    }
}