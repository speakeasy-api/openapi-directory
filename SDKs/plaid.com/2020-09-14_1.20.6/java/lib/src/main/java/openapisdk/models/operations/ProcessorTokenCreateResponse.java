package openapisdk.models.operations;



public class ProcessorTokenCreateResponse {
    public String contentType;
    public ProcessorTokenCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> processorTokenCreateResponse;
    public ProcessorTokenCreateResponse withProcessorTokenCreateResponse(java.util.Map<String, Object> processorTokenCreateResponse) {
        this.processorTokenCreateResponse = processorTokenCreateResponse;
        return this;
    }
    public Long statusCode;
    public ProcessorTokenCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}