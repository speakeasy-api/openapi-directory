package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricValue
 * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
**/
public class MetricValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MetricValue withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variance")
    public String variance;
    public MetricValue withVariance(String variance) {
        this.variance = variance;
        return this;
    }
}