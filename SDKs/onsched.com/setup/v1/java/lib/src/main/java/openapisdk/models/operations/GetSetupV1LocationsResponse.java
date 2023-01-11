package openapisdk.models.operations;



public class GetSetupV1LocationsResponse {
    public String contentType;
    public GetSetupV1LocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> locationListViewModel;
    public GetSetupV1LocationsResponse withLocationListViewModel(java.util.Map<String, Object> locationListViewModel) {
        this.locationListViewModel = locationListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1LocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}