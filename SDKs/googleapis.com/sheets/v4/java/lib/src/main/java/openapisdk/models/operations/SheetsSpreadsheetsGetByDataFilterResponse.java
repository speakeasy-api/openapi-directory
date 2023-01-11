package openapisdk.models.operations;



public class SheetsSpreadsheetsGetByDataFilterResponse {
    public String contentType;
    public SheetsSpreadsheetsGetByDataFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Spreadsheet spreadsheet;
    public SheetsSpreadsheetsGetByDataFilterResponse withSpreadsheet(openapisdk.models.shared.Spreadsheet spreadsheet) {
        this.spreadsheet = spreadsheet;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsGetByDataFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}