package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse {
    public openapisdk.models.shared.BatchUpdateValuesByDataFilterResponse batchUpdateValuesByDataFilterResponse;
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse withBatchUpdateValuesByDataFilterResponse(openapisdk.models.shared.BatchUpdateValuesByDataFilterResponse batchUpdateValuesByDataFilterResponse) {
        this.batchUpdateValuesByDataFilterResponse = batchUpdateValuesByDataFilterResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}