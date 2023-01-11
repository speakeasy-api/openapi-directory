package openapisdk.models.operations;



public class FormsFormsBatchUpdateResponse {
    public openapisdk.models.shared.BatchUpdateFormResponse batchUpdateFormResponse;
    public FormsFormsBatchUpdateResponse withBatchUpdateFormResponse(openapisdk.models.shared.BatchUpdateFormResponse batchUpdateFormResponse) {
        this.batchUpdateFormResponse = batchUpdateFormResponse;
        return this;
    }
    public String contentType;
    public FormsFormsBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FormsFormsBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}