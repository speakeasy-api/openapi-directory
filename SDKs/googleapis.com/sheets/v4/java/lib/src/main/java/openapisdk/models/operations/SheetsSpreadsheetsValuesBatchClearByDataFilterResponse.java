package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesBatchClearByDataFilterResponse {
    public openapisdk.models.shared.BatchClearValuesByDataFilterResponse batchClearValuesByDataFilterResponse;
    public SheetsSpreadsheetsValuesBatchClearByDataFilterResponse withBatchClearValuesByDataFilterResponse(openapisdk.models.shared.BatchClearValuesByDataFilterResponse batchClearValuesByDataFilterResponse) {
        this.batchClearValuesByDataFilterResponse = batchClearValuesByDataFilterResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsValuesBatchClearByDataFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesBatchClearByDataFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}