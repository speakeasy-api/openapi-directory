package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness
 * Information about data freshness for a single aggregation period.
**/
public class GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationPeriod")
    public GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum aggregationPeriod;
    public GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness withAggregationPeriod(GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum aggregationPeriod) {
        this.aggregationPeriod = aggregationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestEndTime")
    public GoogleTypeDateTime latestEndTime;
    public GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness withLatestEndTime(GoogleTypeDateTime latestEndTime) {
        this.latestEndTime = latestEndTime;
        return this;
    }
}