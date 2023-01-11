package openapisdk.models.operations;



public class RetrievePrefixPricingResponse {
    public String contentType;
    public RetrievePrefixPricingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pricingCountriesResponse;
    public RetrievePrefixPricingResponse withPricingCountriesResponse(Object pricingCountriesResponse) {
        this.pricingCountriesResponse = pricingCountriesResponse;
        return this;
    }
    public Long statusCode;
    public RetrievePrefixPricingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrievePrefixPricing400ApplicationJson retrievePrefixPricing400ApplicationJSONObject;
    public RetrievePrefixPricingResponse withRetrievePrefixPricing400ApplicationJsonObject(RetrievePrefixPricing400ApplicationJson retrievePrefixPricing400ApplicationJSONObject) {
        this.retrievePrefixPricing400ApplicationJSONObject = retrievePrefixPricing400ApplicationJSONObject;
        return this;
    }
    public RetrievePrefixPricing401ApplicationJson retrievePrefixPricing401ApplicationJSONObject;
    public RetrievePrefixPricingResponse withRetrievePrefixPricing401ApplicationJsonObject(RetrievePrefixPricing401ApplicationJson retrievePrefixPricing401ApplicationJSONObject) {
        this.retrievePrefixPricing401ApplicationJSONObject = retrievePrefixPricing401ApplicationJSONObject;
        return this;
    }
}