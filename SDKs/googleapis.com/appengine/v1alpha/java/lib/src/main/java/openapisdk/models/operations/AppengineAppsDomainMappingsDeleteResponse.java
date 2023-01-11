package openapisdk.models.operations;



public class AppengineAppsDomainMappingsDeleteResponse {
    public String contentType;
    public AppengineAppsDomainMappingsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public AppengineAppsDomainMappingsDeleteResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public AppengineAppsDomainMappingsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}