package openapisdk.models.operations;



public class PlaydeveloperreportingAnomaliesListResponse {
    public String contentType;
    public PlaydeveloperreportingAnomaliesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse googlePlayDeveloperReportingV1beta1ListAnomaliesResponse;
    public PlaydeveloperreportingAnomaliesListResponse withGooglePlayDeveloperReportingV1beta1ListAnomaliesResponse(openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse googlePlayDeveloperReportingV1beta1ListAnomaliesResponse) {
        this.googlePlayDeveloperReportingV1beta1ListAnomaliesResponse = googlePlayDeveloperReportingV1beta1ListAnomaliesResponse;
        return this;
    }
    public Long statusCode;
    public PlaydeveloperreportingAnomaliesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}