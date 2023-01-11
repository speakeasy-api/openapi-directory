package openapisdk.models.operations;



public class SetTaxationModeResponse {
    public String contentType;
    public SetTaxationModeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public SetTaxationModeResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public SetTaxationModeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaxSettingsResponse taxSettingsResponse;
    public SetTaxationModeResponse withTaxSettingsResponse(openapisdk.models.shared.TaxSettingsResponse taxSettingsResponse) {
        this.taxSettingsResponse = taxSettingsResponse;
        return this;
    }
}