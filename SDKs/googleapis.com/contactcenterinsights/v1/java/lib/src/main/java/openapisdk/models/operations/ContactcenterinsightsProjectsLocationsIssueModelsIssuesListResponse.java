package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListIssuesResponse googleCloudContactcenterinsightsV1ListIssuesResponse;
    public ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse withGoogleCloudContactcenterinsightsV1ListIssuesResponse(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListIssuesResponse googleCloudContactcenterinsightsV1ListIssuesResponse) {
        this.googleCloudContactcenterinsightsV1ListIssuesResponse = googleCloudContactcenterinsightsV1ListIssuesResponse;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}