package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsViewsCreateResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsViewsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View googleCloudContactcenterinsightsV1View;
    public ContactcenterinsightsProjectsLocationsViewsCreateResponse withGoogleCloudContactcenterinsightsV1View(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View googleCloudContactcenterinsightsV1View) {
        this.googleCloudContactcenterinsightsV1View = googleCloudContactcenterinsightsV1View;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsViewsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}