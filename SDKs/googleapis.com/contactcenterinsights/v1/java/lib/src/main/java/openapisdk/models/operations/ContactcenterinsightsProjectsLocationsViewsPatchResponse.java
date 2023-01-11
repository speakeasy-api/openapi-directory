package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsViewsPatchResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsViewsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View googleCloudContactcenterinsightsV1View;
    public ContactcenterinsightsProjectsLocationsViewsPatchResponse withGoogleCloudContactcenterinsightsV1View(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1View googleCloudContactcenterinsightsV1View) {
        this.googleCloudContactcenterinsightsV1View = googleCloudContactcenterinsightsV1View;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsViewsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}