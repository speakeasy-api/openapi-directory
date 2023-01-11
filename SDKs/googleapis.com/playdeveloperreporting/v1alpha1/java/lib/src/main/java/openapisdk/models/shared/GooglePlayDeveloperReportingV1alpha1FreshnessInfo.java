package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1alpha1FreshnessInfo
 * Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
**/
public class GooglePlayDeveloperReportingV1alpha1FreshnessInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freshnesses")
    public GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness[] freshnesses;
    public GooglePlayDeveloperReportingV1alpha1FreshnessInfo withFreshnesses(GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness[] freshnesses) {
        this.freshnesses = freshnesses;
        return this;
    }
}