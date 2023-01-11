package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartGroupRule
 * An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.
**/
public class ChartGroupRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTimeRule")
    public ChartDateTimeRule dateTimeRule;
    public ChartGroupRule withDateTimeRule(ChartDateTimeRule dateTimeRule) {
        this.dateTimeRule = dateTimeRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramRule")
    public ChartHistogramRule histogramRule;
    public ChartGroupRule withHistogramRule(ChartHistogramRule histogramRule) {
        this.histogramRule = histogramRule;
        return this;
    }
}