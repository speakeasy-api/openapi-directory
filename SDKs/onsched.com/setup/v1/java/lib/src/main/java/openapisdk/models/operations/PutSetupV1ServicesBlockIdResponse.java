package openapisdk.models.operations;



public class PutSetupV1ServicesBlockIdResponse {
    public String contentType;
    public PutSetupV1ServicesBlockIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceBlockViewModel serviceBlockViewModel;
    public PutSetupV1ServicesBlockIdResponse withServiceBlockViewModel(openapisdk.models.shared.ServiceBlockViewModel serviceBlockViewModel) {
        this.serviceBlockViewModel = serviceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ServicesBlockIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}