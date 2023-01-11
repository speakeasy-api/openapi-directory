package openapisdk.models.operations;



public class GetTaxSettingsResponse {
    public String contentType;
    public GetTaxSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTaxSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaxSettingsResponse taxSettingsResponse;
    public GetTaxSettingsResponse withTaxSettingsResponse(openapisdk.models.shared.TaxSettingsResponse taxSettingsResponse) {
        this.taxSettingsResponse = taxSettingsResponse;
        return this;
    }
}