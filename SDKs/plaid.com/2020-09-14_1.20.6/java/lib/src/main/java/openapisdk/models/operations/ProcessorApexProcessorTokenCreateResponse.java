package openapisdk.models.operations;



public class ProcessorApexProcessorTokenCreateResponse {
    public String contentType;
    public ProcessorApexProcessorTokenCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> processorTokenCreateResponse;
    public ProcessorApexProcessorTokenCreateResponse withProcessorTokenCreateResponse(java.util.Map<String, Object> processorTokenCreateResponse) {
        this.processorTokenCreateResponse = processorTokenCreateResponse;
        return this;
    }
    public Long statusCode;
    public ProcessorApexProcessorTokenCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}