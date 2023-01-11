package openapisdk.models.operations;



public class SheetsSpreadsheetsGetResponse {
    public String contentType;
    public SheetsSpreadsheetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Spreadsheet spreadsheet;
    public SheetsSpreadsheetsGetResponse withSpreadsheet(openapisdk.models.shared.Spreadsheet spreadsheet) {
        this.spreadsheet = spreadsheet;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}