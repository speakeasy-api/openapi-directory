package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsViewsGetResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsViewsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View googleCloudContactcenterinsightsV1View;
    public ContactcenterinsightsProjectsLocationsViewsGetResponse withGoogleCloudContactcenterinsightsV1View(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View googleCloudContactcenterinsightsV1View) {
        this.googleCloudContactcenterinsightsV1View = googleCloudContactcenterinsightsV1View;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsViewsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}