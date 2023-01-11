package openapisdk.models.operations;



public class GetTaxRatesResponse {
    public String contentType;
    public GetTaxRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTaxRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaxRatesResponse[] taxRatesResponses;
    public GetTaxRatesResponse withTaxRatesResponses(openapisdk.models.shared.TaxRatesResponse[] taxRatesResponses) {
        this.taxRatesResponses = taxRatesResponses;
        return this;
    }
}