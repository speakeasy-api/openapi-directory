/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness - Information about data freshness for a single aggregation period.
 */
public class GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness {
    /**
     * Aggregation period for which data is available.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationPeriod")
    public GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum aggregationPeriod;

    public GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness withAggregationPeriod(GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum aggregationPeriod) {
        this.aggregationPeriod = aggregationPeriod;
        return this;
    }
    
    /**
     * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestEndTime")
    public GoogleTypeDateTime latestEndTime;

    public GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness withLatestEndTime(GoogleTypeDateTime latestEndTime) {
        this.latestEndTime = latestEndTime;
        return this;
    }
    
    public GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness(){}
}
