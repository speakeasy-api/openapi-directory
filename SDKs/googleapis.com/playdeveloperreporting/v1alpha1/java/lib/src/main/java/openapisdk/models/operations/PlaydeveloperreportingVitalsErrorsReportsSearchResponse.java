package openapisdk.models.operations;



public class PlaydeveloperreportingVitalsErrorsReportsSearchResponse {
    public String contentType;
    public PlaydeveloperreportingVitalsErrorsReportsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse;
    public PlaydeveloperreportingVitalsErrorsReportsSearchResponse withGooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse(openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse) {
        this.googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse = googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse;
        return this;
    }
    public Long statusCode;
    public PlaydeveloperreportingVitalsErrorsReportsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}