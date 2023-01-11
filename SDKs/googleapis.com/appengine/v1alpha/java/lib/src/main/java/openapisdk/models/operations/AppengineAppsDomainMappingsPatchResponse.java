package openapisdk.models.operations;



public class AppengineAppsDomainMappingsPatchResponse {
    public String contentType;
    public AppengineAppsDomainMappingsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public AppengineAppsDomainMappingsPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public AppengineAppsDomainMappingsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}