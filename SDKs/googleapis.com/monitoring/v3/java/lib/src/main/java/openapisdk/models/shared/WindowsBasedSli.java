package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WindowsBasedSli
 * A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
**/
public class WindowsBasedSli {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goodBadMetricFilter")
    public String goodBadMetricFilter;
    public WindowsBasedSli withGoodBadMetricFilter(String goodBadMetricFilter) {
        this.goodBadMetricFilter = goodBadMetricFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goodTotalRatioThreshold")
    public PerformanceThreshold goodTotalRatioThreshold;
    public WindowsBasedSli withGoodTotalRatioThreshold(PerformanceThreshold goodTotalRatioThreshold) {
        this.goodTotalRatioThreshold = goodTotalRatioThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricMeanInRange")
    public MetricRange metricMeanInRange;
    public WindowsBasedSli withMetricMeanInRange(MetricRange metricMeanInRange) {
        this.metricMeanInRange = metricMeanInRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricSumInRange")
    public MetricRange metricSumInRange;
    public WindowsBasedSli withMetricSumInRange(MetricRange metricSumInRange) {
        this.metricSumInRange = metricSumInRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowPeriod")
    public String windowPeriod;
    public WindowsBasedSli withWindowPeriod(String windowPeriod) {
        this.windowPeriod = windowPeriod;
        return this;
    }
}