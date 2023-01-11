package openapisdk.models.operations;



public class ProcessorBankTransferCreateResponse {
    public String contentType;
    public ProcessorBankTransferCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public ProcessorBankTransferCreateResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> processorBankTransferCreateResponse;
    public ProcessorBankTransferCreateResponse withProcessorBankTransferCreateResponse(java.util.Map<String, Object> processorBankTransferCreateResponse) {
        this.processorBankTransferCreateResponse = processorBankTransferCreateResponse;
        return this;
    }
    public Long statusCode;
    public ProcessorBankTransferCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}