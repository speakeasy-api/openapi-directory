package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListAnalysesResponse googleCloudContactcenterinsightsV1ListAnalysesResponse;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse withGoogleCloudContactcenterinsightsV1ListAnalysesResponse(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListAnalysesResponse googleCloudContactcenterinsightsV1ListAnalysesResponse) {
        this.googleCloudContactcenterinsightsV1ListAnalysesResponse = googleCloudContactcenterinsightsV1ListAnalysesResponse;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}