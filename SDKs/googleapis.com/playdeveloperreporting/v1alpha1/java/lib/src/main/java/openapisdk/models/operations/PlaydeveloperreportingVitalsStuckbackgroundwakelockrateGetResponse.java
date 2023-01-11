package openapisdk.models.operations;



public class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse {
    public String contentType;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse withGooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet(openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet) {
        this.googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet = googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet;
        return this;
    }
    public Long statusCode;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}