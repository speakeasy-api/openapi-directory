package openapisdk.models.operations;



public class GetProtectionResponse {
    public String contentType;
    public GetProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ProtectionResult protectionResult;
    public GetProtectionResponse withProtectionResult(openapisdk.models.shared.ProtectionResult protectionResult) {
        this.protectionResult = protectionResult;
        return this;
    }
}