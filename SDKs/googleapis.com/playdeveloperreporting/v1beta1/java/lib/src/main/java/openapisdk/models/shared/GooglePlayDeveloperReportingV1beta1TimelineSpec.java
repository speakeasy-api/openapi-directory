package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1beta1TimelineSpec
 * Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query.
**/
public class GooglePlayDeveloperReportingV1beta1TimelineSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationPeriod")
    public GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum aggregationPeriod;
    public GooglePlayDeveloperReportingV1beta1TimelineSpec withAggregationPeriod(GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum aggregationPeriod) {
        this.aggregationPeriod = aggregationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public GoogleTypeDateTime endTime;
    public GooglePlayDeveloperReportingV1beta1TimelineSpec withEndTime(GoogleTypeDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public GoogleTypeDateTime startTime;
    public GooglePlayDeveloperReportingV1beta1TimelineSpec withStartTime(GoogleTypeDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}