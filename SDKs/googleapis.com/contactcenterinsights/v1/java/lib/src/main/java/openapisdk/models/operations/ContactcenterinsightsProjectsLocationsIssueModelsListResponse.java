package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsIssueModelsListResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsIssueModelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListIssueModelsResponse googleCloudContactcenterinsightsV1ListIssueModelsResponse;
    public ContactcenterinsightsProjectsLocationsIssueModelsListResponse withGoogleCloudContactcenterinsightsV1ListIssueModelsResponse(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListIssueModelsResponse googleCloudContactcenterinsightsV1ListIssueModelsResponse) {
        this.googleCloudContactcenterinsightsV1ListIssueModelsResponse = googleCloudContactcenterinsightsV1ListIssueModelsResponse;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsIssueModelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}