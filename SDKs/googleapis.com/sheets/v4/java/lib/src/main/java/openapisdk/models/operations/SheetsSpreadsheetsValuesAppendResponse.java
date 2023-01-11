package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesAppendResponse {
    public openapisdk.models.shared.AppendValuesResponse appendValuesResponse;
    public SheetsSpreadsheetsValuesAppendResponse withAppendValuesResponse(openapisdk.models.shared.AppendValuesResponse appendValuesResponse) {
        this.appendValuesResponse = appendValuesResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsValuesAppendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesAppendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}