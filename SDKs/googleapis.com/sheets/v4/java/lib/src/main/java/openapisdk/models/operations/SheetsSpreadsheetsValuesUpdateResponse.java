package openapisdk.models.operations;



public class SheetsSpreadsheetsValuesUpdateResponse {
    public String contentType;
    public SheetsSpreadsheetsValuesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SheetsSpreadsheetsValuesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateValuesResponse updateValuesResponse;
    public SheetsSpreadsheetsValuesUpdateResponse withUpdateValuesResponse(openapisdk.models.shared.UpdateValuesResponse updateValuesResponse) {
        this.updateValuesResponse = updateValuesResponse;
        return this;
    }
}