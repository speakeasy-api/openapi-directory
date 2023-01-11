package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerformanceThreshold
 * A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
**/
public class PerformanceThreshold {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicSliPerformance")
    public BasicSli basicSliPerformance;
    public PerformanceThreshold withBasicSliPerformance(BasicSli basicSliPerformance) {
        this.basicSliPerformance = basicSliPerformance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performance")
    public RequestBasedSli performance;
    public PerformanceThreshold withPerformance(RequestBasedSli performance) {
        this.performance = performance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threshold")
    public Double threshold;
    public PerformanceThreshold withThreshold(Double threshold) {
        this.threshold = threshold;
        return this;
    }
}