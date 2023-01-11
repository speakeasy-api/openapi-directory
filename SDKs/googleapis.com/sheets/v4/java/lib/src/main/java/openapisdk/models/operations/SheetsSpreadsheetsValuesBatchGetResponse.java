package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesBatchGetResponse {
    public openapisdk.models.shared.BatchGetValuesResponse batchGetValuesResponse;
    public SheetsSpreadsheetsValuesBatchGetResponse withBatchGetValuesResponse(openapisdk.models.shared.BatchGetValuesResponse batchGetValuesResponse) {
        this.batchGetValuesResponse = batchGetValuesResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsValuesBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}