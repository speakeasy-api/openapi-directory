package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesBatchClearResponse {
    public openapisdk.models.shared.BatchClearValuesResponse batchClearValuesResponse;
    public SheetsSpreadsheetsValuesBatchClearResponse withBatchClearValuesResponse(openapisdk.models.shared.BatchClearValuesResponse batchClearValuesResponse) {
        this.batchClearValuesResponse = batchClearValuesResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsValuesBatchClearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesBatchClearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}