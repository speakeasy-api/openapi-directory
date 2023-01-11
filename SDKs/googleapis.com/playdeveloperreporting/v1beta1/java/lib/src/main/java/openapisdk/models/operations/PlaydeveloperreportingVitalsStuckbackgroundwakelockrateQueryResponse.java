package openapisdk.models.operations;



public class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse {
    public String contentType;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse withGooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse(openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse) {
        this.googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse = googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse;
        return this;
    }
    public Long statusCode;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}