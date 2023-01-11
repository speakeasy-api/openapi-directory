package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Trigger
 * Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used.
**/
public class Trigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public Trigger withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Double percent;
    public Trigger withPercent(Double percent) {
        this.percent = percent;
        return this;
    }
}