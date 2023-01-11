package openapisdk.models.operations;



public class PostSetupV1LocationsResponse {
    public String contentType;
    public PostSetupV1LocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public PostSetupV1LocationsResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1LocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}