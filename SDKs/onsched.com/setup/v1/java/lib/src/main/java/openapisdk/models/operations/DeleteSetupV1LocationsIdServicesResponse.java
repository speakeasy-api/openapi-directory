package openapisdk.models.operations;



public class DeleteSetupV1LocationsIdServicesResponse {
    public String contentType;
    public DeleteSetupV1LocationsIdServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public DeleteSetupV1LocationsIdServicesResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1LocationsIdServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}