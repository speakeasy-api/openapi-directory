package openapisdk.models.operations;



public class GetSetupV1LocationsIdResponse {
    public String contentType;
    public GetSetupV1LocationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public GetSetupV1LocationsIdResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1LocationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}