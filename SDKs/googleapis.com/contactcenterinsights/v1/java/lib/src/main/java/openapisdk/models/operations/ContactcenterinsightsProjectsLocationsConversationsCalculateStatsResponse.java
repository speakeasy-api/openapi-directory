package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse googleCloudContactcenterinsightsV1CalculateStatsResponse;
    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse withGoogleCloudContactcenterinsightsV1CalculateStatsResponse(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse googleCloudContactcenterinsightsV1CalculateStatsResponse) {
        this.googleCloudContactcenterinsightsV1CalculateStatsResponse = googleCloudContactcenterinsightsV1CalculateStatsResponse;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}