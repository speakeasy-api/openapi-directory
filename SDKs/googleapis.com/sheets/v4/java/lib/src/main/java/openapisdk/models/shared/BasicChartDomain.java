package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicChartDomain
 * The domain of a chart. For example, if charting stock prices over time, this would be the date.
**/
public class BasicChartDomain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public ChartData domain;
    public BasicChartDomain withDomain(ChartData domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reversed")
    public Boolean reversed;
    public BasicChartDomain withReversed(Boolean reversed) {
        this.reversed = reversed;
        return this;
    }
}