package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Activities
 * Represents an activity group.
**/
public class Activities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public DimensionValue[] filters;
    public Activities withFilters(DimensionValue[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Activities withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricNames")
    public String[] metricNames;
    public Activities withMetricNames(String[] metricNames) {
        this.metricNames = metricNames;
        return this;
    }
}