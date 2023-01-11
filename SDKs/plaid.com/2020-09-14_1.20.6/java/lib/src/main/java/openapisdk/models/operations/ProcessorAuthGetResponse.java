package openapisdk.models.operations;



public class ProcessorAuthGetResponse {
    public String contentType;
    public ProcessorAuthGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> processorAuthGetResponse;
    public ProcessorAuthGetResponse withProcessorAuthGetResponse(java.util.Map<String, Object> processorAuthGetResponse) {
        this.processorAuthGetResponse = processorAuthGetResponse;
        return this;
    }
    public Long statusCode;
    public ProcessorAuthGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}