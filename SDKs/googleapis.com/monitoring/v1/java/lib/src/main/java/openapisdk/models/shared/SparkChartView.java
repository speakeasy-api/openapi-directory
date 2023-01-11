package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkChartView
 * A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.
**/
public class SparkChartView {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minAlignmentPeriod")
    public String minAlignmentPeriod;
    public SparkChartView withMinAlignmentPeriod(String minAlignmentPeriod) {
        this.minAlignmentPeriod = minAlignmentPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkChartType")
    public SparkChartViewSparkChartTypeEnum sparkChartType;
    public SparkChartView withSparkChartType(SparkChartViewSparkChartTypeEnum sparkChartType) {
        this.sparkChartType = sparkChartType;
        return this;
    }
}