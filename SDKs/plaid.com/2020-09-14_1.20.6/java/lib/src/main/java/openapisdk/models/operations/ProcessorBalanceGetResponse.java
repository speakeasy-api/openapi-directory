package openapisdk.models.operations;



public class ProcessorBalanceGetResponse {
    public String contentType;
    public ProcessorBalanceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> processorBalanceGetResponse;
    public ProcessorBalanceGetResponse withProcessorBalanceGetResponse(java.util.Map<String, Object> processorBalanceGetResponse) {
        this.processorBalanceGetResponse = processorBalanceGetResponse;
        return this;
    }
    public Long statusCode;
    public ProcessorBalanceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}