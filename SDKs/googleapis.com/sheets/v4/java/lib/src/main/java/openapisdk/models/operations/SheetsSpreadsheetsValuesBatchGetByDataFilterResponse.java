package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesBatchGetByDataFilterResponse {
    public openapisdk.models.shared.BatchGetValuesByDataFilterResponse batchGetValuesByDataFilterResponse;
    public SheetsSpreadsheetsValuesBatchGetByDataFilterResponse withBatchGetValuesByDataFilterResponse(openapisdk.models.shared.BatchGetValuesByDataFilterResponse batchGetValuesByDataFilterResponse) {
        this.batchGetValuesByDataFilterResponse = batchGetValuesByDataFilterResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsValuesBatchGetByDataFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesBatchGetByDataFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}