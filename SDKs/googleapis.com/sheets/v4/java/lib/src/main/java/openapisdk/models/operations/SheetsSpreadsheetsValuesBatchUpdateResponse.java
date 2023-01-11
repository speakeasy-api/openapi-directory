package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesBatchUpdateResponse {
    public openapisdk.models.shared.BatchUpdateValuesResponse batchUpdateValuesResponse;
    public SheetsSpreadsheetsValuesBatchUpdateResponse withBatchUpdateValuesResponse(openapisdk.models.shared.BatchUpdateValuesResponse batchUpdateValuesResponse) {
        this.batchUpdateValuesResponse = batchUpdateValuesResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsValuesBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}