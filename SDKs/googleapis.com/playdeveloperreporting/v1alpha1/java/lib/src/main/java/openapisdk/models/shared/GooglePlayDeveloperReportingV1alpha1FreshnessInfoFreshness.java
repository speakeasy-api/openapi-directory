package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness
 * Information about data freshness for a single aggregation period.
**/
public class GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationPeriod")
    public GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum aggregationPeriod;
    public GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness withAggregationPeriod(GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum aggregationPeriod) {
        this.aggregationPeriod = aggregationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestEndTime")
    public GoogleTypeDateTime latestEndTime;
    public GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness withLatestEndTime(GoogleTypeDateTime latestEndTime) {
        this.latestEndTime = latestEndTime;
        return this;
    }
}