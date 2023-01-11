package openapisdk.models.operations;



public class GetTaxRateResponse {
    public String contentType;
    public GetTaxRateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTaxRateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaxRate taxRate;
    public GetTaxRateResponse withTaxRate(openapisdk.models.shared.TaxRate taxRate) {
        this.taxRate = taxRate;
        return this;
    }
}