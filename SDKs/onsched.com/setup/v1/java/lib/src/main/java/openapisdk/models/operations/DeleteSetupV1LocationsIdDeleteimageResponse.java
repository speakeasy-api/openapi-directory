package openapisdk.models.operations;



public class DeleteSetupV1LocationsIdDeleteimageResponse {
    public String contentType;
    public DeleteSetupV1LocationsIdDeleteimageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public DeleteSetupV1LocationsIdDeleteimageResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1LocationsIdDeleteimageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}