package openapisdk.models.operations;



public class PlaydeveloperreportingVitalsErrorsIssuesSearchResponse {
    public String contentType;
    public PlaydeveloperreportingVitalsErrorsIssuesSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse;
    public PlaydeveloperreportingVitalsErrorsIssuesSearchResponse withGooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse(openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse) {
        this.googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse = googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse;
        return this;
    }
    public Long statusCode;
    public PlaydeveloperreportingVitalsErrorsIssuesSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}