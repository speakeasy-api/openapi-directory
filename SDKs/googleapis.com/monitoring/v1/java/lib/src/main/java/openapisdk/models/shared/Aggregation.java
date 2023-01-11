package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Aggregation
 * Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation).
**/
public class Aggregation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alignmentPeriod")
    public String alignmentPeriod;
    public Aggregation withAlignmentPeriod(String alignmentPeriod) {
        this.alignmentPeriod = alignmentPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossSeriesReducer")
    public AggregationCrossSeriesReducerEnum crossSeriesReducer;
    public Aggregation withCrossSeriesReducer(AggregationCrossSeriesReducerEnum crossSeriesReducer) {
        this.crossSeriesReducer = crossSeriesReducer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupByFields")
    public String[] groupByFields;
    public Aggregation withGroupByFields(String[] groupByFields) {
        this.groupByFields = groupByFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perSeriesAligner")
    public AggregationPerSeriesAlignerEnum perSeriesAligner;
    public Aggregation withPerSeriesAligner(AggregationPerSeriesAlignerEnum perSeriesAligner) {
        this.perSeriesAligner = perSeriesAligner;
        return this;
    }
}