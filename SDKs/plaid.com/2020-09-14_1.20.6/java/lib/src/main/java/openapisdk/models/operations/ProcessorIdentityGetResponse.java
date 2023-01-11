package openapisdk.models.operations;



public class ProcessorIdentityGetResponse {
    public String contentType;
    public ProcessorIdentityGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> processorIdentityGetResponse;
    public ProcessorIdentityGetResponse withProcessorIdentityGetResponse(java.util.Map<String, Object> processorIdentityGetResponse) {
        this.processorIdentityGetResponse = processorIdentityGetResponse;
        return this;
    }
    public Long statusCode;
    public ProcessorIdentityGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}