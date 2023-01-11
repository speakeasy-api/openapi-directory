package openapisdk.models.operations;



public class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse {
    public String contentType;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse withGooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet(openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet) {
        this.googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet = googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet;
        return this;
    }
    public Long statusCode;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}