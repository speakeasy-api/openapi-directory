package openapisdk.models.operations;



public class UpdateTaxRateResponse {
    public String contentType;
    public UpdateTaxRateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateTaxRateResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateTaxRateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaxRate taxRate;
    public UpdateTaxRateResponse withTaxRate(openapisdk.models.shared.TaxRate taxRate) {
        this.taxRate = taxRate;
        return this;
    }
}