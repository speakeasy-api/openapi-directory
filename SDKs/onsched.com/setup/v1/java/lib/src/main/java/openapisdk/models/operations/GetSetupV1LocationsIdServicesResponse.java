package openapisdk.models.operations;



public class GetSetupV1LocationsIdServicesResponse {
    public java.util.Map<String, Object> businessServiceListViewModel;
    public GetSetupV1LocationsIdServicesResponse withBusinessServiceListViewModel(java.util.Map<String, Object> businessServiceListViewModel) {
        this.businessServiceListViewModel = businessServiceListViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1LocationsIdServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1LocationsIdServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}