package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Metric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogram")
    public Bin[] histogram;
    public Metric withHistogram(Bin[] histogram) {
        this.histogram = histogram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentiles")
    public Percentiles percentiles;
    public Metric withPercentiles(Percentiles percentiles) {
        this.percentiles = percentiles;
        return this;
    }
}