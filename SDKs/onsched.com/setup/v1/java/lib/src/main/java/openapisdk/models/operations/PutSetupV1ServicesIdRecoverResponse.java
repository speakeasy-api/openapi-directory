package openapisdk.models.operations;



public class PutSetupV1ServicesIdRecoverResponse {
    public String contentType;
    public PutSetupV1ServicesIdRecoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceViewModel serviceViewModel;
    public PutSetupV1ServicesIdRecoverResponse withServiceViewModel(openapisdk.models.shared.ServiceViewModel serviceViewModel) {
        this.serviceViewModel = serviceViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ServicesIdRecoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}