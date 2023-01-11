package openapisdk.models.operations;



public class GetProductCountForAllTaxesResponse {
    public String contentType;
    public GetProductCountForAllTaxesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProductCountForAllTaxesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaxRateProductCountResponse taxRateProductCountResponse;
    public GetProductCountForAllTaxesResponse withTaxRateProductCountResponse(openapisdk.models.shared.TaxRateProductCountResponse taxRateProductCountResponse) {
        this.taxRateProductCountResponse = taxRateProductCountResponse;
        return this;
    }
}