package openapisdk.models.operations;



public class PlaydeveloperreportingAnomaliesListResponse {
    public String contentType;
    public PlaydeveloperreportingAnomaliesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse googlePlayDeveloperReportingV1alpha1ListAnomaliesResponse;
    public PlaydeveloperreportingAnomaliesListResponse withGooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse(openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse googlePlayDeveloperReportingV1alpha1ListAnomaliesResponse) {
        this.googlePlayDeveloperReportingV1alpha1ListAnomaliesResponse = googlePlayDeveloperReportingV1alpha1ListAnomaliesResponse;
        return this;
    }
    public Long statusCode;
    public PlaydeveloperreportingAnomaliesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}