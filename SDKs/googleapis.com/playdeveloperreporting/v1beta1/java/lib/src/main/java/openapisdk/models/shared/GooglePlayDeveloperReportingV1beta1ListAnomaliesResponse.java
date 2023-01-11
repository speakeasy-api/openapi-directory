package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse
 * Response with a list of anomalies in datasets.
**/
public class GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anomalies")
    public GooglePlayDeveloperReportingV1beta1Anomaly[] anomalies;
    public GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse withAnomalies(GooglePlayDeveloperReportingV1beta1Anomaly[] anomalies) {
        this.anomalies = anomalies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}