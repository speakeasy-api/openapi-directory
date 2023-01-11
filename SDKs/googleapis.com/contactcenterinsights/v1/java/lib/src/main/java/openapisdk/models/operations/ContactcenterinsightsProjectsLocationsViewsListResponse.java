package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsViewsListResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsViewsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListViewsResponse googleCloudContactcenterinsightsV1ListViewsResponse;
    public ContactcenterinsightsProjectsLocationsViewsListResponse withGoogleCloudContactcenterinsightsV1ListViewsResponse(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListViewsResponse googleCloudContactcenterinsightsV1ListViewsResponse) {
        this.googleCloudContactcenterinsightsV1ListViewsResponse = googleCloudContactcenterinsightsV1ListViewsResponse;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsViewsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}