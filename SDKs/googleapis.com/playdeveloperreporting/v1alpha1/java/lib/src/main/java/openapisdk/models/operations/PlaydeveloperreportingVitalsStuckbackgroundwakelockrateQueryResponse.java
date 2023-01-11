package openapisdk.models.operations;



public class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse {
    public String contentType;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse googlePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse withGooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse(openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse googlePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse) {
        this.googlePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse = googlePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse;
        return this;
    }
    public Long statusCode;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}