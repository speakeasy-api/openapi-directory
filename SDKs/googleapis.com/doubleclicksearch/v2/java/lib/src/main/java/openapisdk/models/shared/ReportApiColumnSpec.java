package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportApiColumnSpec
 * A request object used to create a DoubleClick Search report.
**/
public class ReportApiColumnSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnName")
    public String columnName;
    public ReportApiColumnSpec withColumnName(String columnName) {
        this.columnName = columnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDimensionName")
    public String customDimensionName;
    public ReportApiColumnSpec withCustomDimensionName(String customDimensionName) {
        this.customDimensionName = customDimensionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customMetricName")
    public String customMetricName;
    public ReportApiColumnSpec withCustomMetricName(String customMetricName) {
        this.customMetricName = customMetricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public ReportApiColumnSpec withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupByColumn")
    public Boolean groupByColumn;
    public ReportApiColumnSpec withGroupByColumn(Boolean groupByColumn) {
        this.groupByColumn = groupByColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerText")
    public String headerText;
    public ReportApiColumnSpec withHeaderText(String headerText) {
        this.headerText = headerText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformSource")
    public String platformSource;
    public ReportApiColumnSpec withPlatformSource(String platformSource) {
        this.platformSource = platformSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productReportPerspective")
    public String productReportPerspective;
    public ReportApiColumnSpec withProductReportPerspective(String productReportPerspective) {
        this.productReportPerspective = productReportPerspective;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savedColumnName")
    public String savedColumnName;
    public ReportApiColumnSpec withSavedColumnName(String savedColumnName) {
        this.savedColumnName = savedColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public ReportApiColumnSpec withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}