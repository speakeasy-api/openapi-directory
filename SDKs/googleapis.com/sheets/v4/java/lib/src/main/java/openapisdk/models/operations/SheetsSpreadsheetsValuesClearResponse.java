package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesClearResponse {
    public openapisdk.models.shared.ClearValuesResponse clearValuesResponse;
    public SheetsSpreadsheetsValuesClearResponse withClearValuesResponse(openapisdk.models.shared.ClearValuesResponse clearValuesResponse) {
        this.clearValuesResponse = clearValuesResponse;
        return this;
    }
    public String contentType;
    public SheetsSpreadsheetsValuesClearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesClearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}