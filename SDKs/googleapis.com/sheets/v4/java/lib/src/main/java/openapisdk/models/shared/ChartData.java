package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartData
 * The data included in a domain or series.
**/
public class ChartData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregateType")
    public ChartDataAggregateTypeEnum aggregateType;
    public ChartData withAggregateType(ChartDataAggregateTypeEnum aggregateType) {
        this.aggregateType = aggregateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnReference")
    public DataSourceColumnReference columnReference;
    public ChartData withColumnReference(DataSourceColumnReference columnReference) {
        this.columnReference = columnReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupRule")
    public ChartGroupRule groupRule;
    public ChartData withGroupRule(ChartGroupRule groupRule) {
        this.groupRule = groupRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceRange")
    public ChartSourceRange sourceRange;
    public ChartData withSourceRange(ChartSourceRange sourceRange) {
        this.sourceRange = sourceRange;
        return this;
    }
}