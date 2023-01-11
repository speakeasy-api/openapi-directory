package openapisdk.models.operations;



public class PostSetupV1LocationsIdServicesResponse {
    public String contentType;
    public PostSetupV1LocationsIdServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public PostSetupV1LocationsIdServicesResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1LocationsIdServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}