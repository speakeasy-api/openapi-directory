package openapisdk.models.operations;



public class GetSetupV1LocationsServicesIdResponse {
    public openapisdk.models.shared.BusinessServiceViewModel businessServiceViewModel;
    public GetSetupV1LocationsServicesIdResponse withBusinessServiceViewModel(openapisdk.models.shared.BusinessServiceViewModel businessServiceViewModel) {
        this.businessServiceViewModel = businessServiceViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1LocationsServicesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1LocationsServicesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}