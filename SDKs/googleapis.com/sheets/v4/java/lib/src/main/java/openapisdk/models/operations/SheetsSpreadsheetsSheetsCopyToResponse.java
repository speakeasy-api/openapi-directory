package openapisdk.models.operations;



public class SheetsSpreadsheetsSheetsCopyToResponse {
    public String contentType;
    public SheetsSpreadsheetsSheetsCopyToResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SheetProperties sheetProperties;
    public SheetsSpreadsheetsSheetsCopyToResponse withSheetProperties(openapisdk.models.shared.SheetProperties sheetProperties) {
        this.sheetProperties = sheetProperties;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsSheetsCopyToResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}