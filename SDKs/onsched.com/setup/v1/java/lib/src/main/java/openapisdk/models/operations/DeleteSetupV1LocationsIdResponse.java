package openapisdk.models.operations;



public class DeleteSetupV1LocationsIdResponse {
    public String contentType;
    public DeleteSetupV1LocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public DeleteSetupV1LocationsIdResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1LocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}