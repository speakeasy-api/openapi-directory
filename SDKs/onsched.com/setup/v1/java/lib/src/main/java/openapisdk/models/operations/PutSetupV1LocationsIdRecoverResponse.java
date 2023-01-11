package openapisdk.models.operations;



public class PutSetupV1LocationsIdRecoverResponse {
    public String contentType;
    public PutSetupV1LocationsIdRecoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public PutSetupV1LocationsIdRecoverResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1LocationsIdRecoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}