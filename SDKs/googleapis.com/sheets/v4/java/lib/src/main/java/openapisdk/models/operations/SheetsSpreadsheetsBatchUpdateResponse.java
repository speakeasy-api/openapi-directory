package openapisdk.models.operations;



public class SheetsSpreadsheetsBatchUpdateResponse {
    public openapisdk.models.shared.BatchUpdateSpreadsheetResponse batchUpdateSpreadsheetResponse;
    public SheetsSpreadsheetsBatchUpdateResponse withBatchUpdateSpreadsheetResponse(openapisdk.models.shared.BatchUpdateSpreadsheetResponse batchUpdateSpreadsheetResponse) {
        this.batchUpdateSpreadsheetResponse = batchUpdateSpreadsheetResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}