package openapisdk.models.operations;



public class DeleteSetupV1LocationsServicesIdResponse {
    public String contentType;
    public DeleteSetupV1LocationsServicesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public DeleteSetupV1LocationsServicesIdResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1LocationsServicesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}