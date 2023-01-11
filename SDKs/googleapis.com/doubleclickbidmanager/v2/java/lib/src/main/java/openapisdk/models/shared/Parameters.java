package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Parameters
 * Parameters of a query or report.
**/
public class Parameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public FilterPair[] filters;
    public Parameters withFilters(FilterPair[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupBys")
    public String[] groupBys;
    public Parameters withGroupBys(String[] groupBys) {
        this.groupBys = groupBys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public String[] metrics;
    public Parameters withMetrics(String[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Options options;
    public Parameters withOptions(Options options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ParametersTypeEnum type;
    public Parameters withType(ParametersTypeEnum type) {
        this.type = type;
        return this;
    }
}