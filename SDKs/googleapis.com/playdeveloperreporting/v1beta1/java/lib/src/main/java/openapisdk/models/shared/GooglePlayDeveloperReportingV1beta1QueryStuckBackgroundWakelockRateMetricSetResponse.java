package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse
 * Response message for QueryStuckBackgroundWakelockRateMetricSet.
**/
public class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public GooglePlayDeveloperReportingV1beta1MetricsRow[] rows;
    public GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse withRows(GooglePlayDeveloperReportingV1beta1MetricsRow[] rows) {
        this.rows = rows;
        return this;
    }
}