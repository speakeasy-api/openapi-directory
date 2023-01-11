package openapisdk.models.operations;



public class SheetsSpreadsheetsCreateResponse {
    public String contentType;
    public SheetsSpreadsheetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Spreadsheet spreadsheet;
    public SheetsSpreadsheetsCreateResponse withSpreadsheet(openapisdk.models.shared.Spreadsheet spreadsheet) {
        this.spreadsheet = spreadsheet;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}