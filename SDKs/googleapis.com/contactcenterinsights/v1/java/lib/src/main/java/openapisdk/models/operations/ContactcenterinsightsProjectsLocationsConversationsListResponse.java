package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsConversationsListResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsConversationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListConversationsResponse googleCloudContactcenterinsightsV1ListConversationsResponse;
    public ContactcenterinsightsProjectsLocationsConversationsListResponse withGoogleCloudContactcenterinsightsV1ListConversationsResponse(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListConversationsResponse googleCloudContactcenterinsightsV1ListConversationsResponse) {
        this.googleCloudContactcenterinsightsV1ListConversationsResponse = googleCloudContactcenterinsightsV1ListConversationsResponse;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsConversationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}