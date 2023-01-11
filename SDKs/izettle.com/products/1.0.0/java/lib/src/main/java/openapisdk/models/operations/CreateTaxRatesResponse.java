package openapisdk.models.operations;



public class CreateTaxRatesResponse {
    public String contentType;
    public CreateTaxRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateTaxRatesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateTaxRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaxRatesResponse taxRatesResponse;
    public CreateTaxRatesResponse withTaxRatesResponse(openapisdk.models.shared.TaxRatesResponse taxRatesResponse) {
        this.taxRatesResponse = taxRatesResponse;
        return this;
    }
}