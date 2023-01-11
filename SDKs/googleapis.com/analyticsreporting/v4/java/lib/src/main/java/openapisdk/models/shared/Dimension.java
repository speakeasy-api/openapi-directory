package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dimension
 * [Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates.
**/
public class Dimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramBuckets")
    public String[] histogramBuckets;
    public Dimension withHistogramBuckets(String[] histogramBuckets) {
        this.histogramBuckets = histogramBuckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Dimension withName(String name) {
        this.name = name;
        return this;
    }
}