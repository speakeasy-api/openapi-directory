package openapisdk.models.operations;



public class GetServiceResponse {
    public String contentType;
    public GetServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public GetServiceResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public GetServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}