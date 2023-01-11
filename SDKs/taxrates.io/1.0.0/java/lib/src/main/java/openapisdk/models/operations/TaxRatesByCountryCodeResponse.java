package openapisdk.models.operations;



public class TaxRatesByCountryCodeResponse {
    public String contentType;
    public TaxRatesByCountryCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaxRatesByCountryCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaxRatesByCountryCode200ApplicationJson taxRatesByCountryCode200ApplicationJSONObject;
    public TaxRatesByCountryCodeResponse withTaxRatesByCountryCode200ApplicationJsonObject(TaxRatesByCountryCode200ApplicationJson taxRatesByCountryCode200ApplicationJSONObject) {
        this.taxRatesByCountryCode200ApplicationJSONObject = taxRatesByCountryCode200ApplicationJSONObject;
        return this;
    }
    public TaxRatesByCountryCode500ApplicationJson taxRatesByCountryCode500ApplicationJSONObject;
    public TaxRatesByCountryCodeResponse withTaxRatesByCountryCode500ApplicationJsonObject(TaxRatesByCountryCode500ApplicationJson taxRatesByCountryCode500ApplicationJSONObject) {
        this.taxRatesByCountryCode500ApplicationJSONObject = taxRatesByCountryCode500ApplicationJSONObject;
        return this;
    }
}