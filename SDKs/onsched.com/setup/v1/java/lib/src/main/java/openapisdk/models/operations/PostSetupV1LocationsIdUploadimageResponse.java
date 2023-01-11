package openapisdk.models.operations;



public class PostSetupV1LocationsIdUploadimageResponse {
    public String contentType;
    public PostSetupV1LocationsIdUploadimageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public PostSetupV1LocationsIdUploadimageResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1LocationsIdUploadimageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}