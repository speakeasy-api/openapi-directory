package openapisdk.models.operations;



public class PatchServiceResponse {
    public String contentType;
    public PatchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public PatchServiceResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public PatchServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}