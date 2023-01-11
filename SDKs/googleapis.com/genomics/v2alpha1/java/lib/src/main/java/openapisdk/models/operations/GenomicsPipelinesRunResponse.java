package openapisdk.models.operations;



public class GenomicsPipelinesRunResponse {
    public String contentType;
    public GenomicsPipelinesRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public GenomicsPipelinesRunResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public GenomicsPipelinesRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}