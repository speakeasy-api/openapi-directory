package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesGetResponse {
    public String contentType;
    public SheetsSpreadsheetsValuesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValueRange valueRange;
    public SheetsSpreadsheetsValuesGetResponse withValueRange(openapisdk.models.shared.ValueRange valueRange) {
        this.valueRange = valueRange;
        return this;
    }
}