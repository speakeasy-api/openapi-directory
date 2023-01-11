package openapisdk.models.operations;



public class RetrievePricingCountryResponse {
    public String contentType;
    public RetrievePricingCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pricingCountryResponse;
    public RetrievePricingCountryResponse withPricingCountryResponse(Object pricingCountryResponse) {
        this.pricingCountryResponse = pricingCountryResponse;
        return this;
    }
    public Long statusCode;
    public RetrievePricingCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrievePricingCountry400ApplicationJson retrievePricingCountry400ApplicationJSONObject;
    public RetrievePricingCountryResponse withRetrievePricingCountry400ApplicationJsonObject(RetrievePricingCountry400ApplicationJson retrievePricingCountry400ApplicationJSONObject) {
        this.retrievePricingCountry400ApplicationJSONObject = retrievePricingCountry400ApplicationJSONObject;
        return this;
    }
    public RetrievePricingCountry401ApplicationJson retrievePricingCountry401ApplicationJSONObject;
    public RetrievePricingCountryResponse withRetrievePricingCountry401ApplicationJsonObject(RetrievePricingCountry401ApplicationJson retrievePricingCountry401ApplicationJSONObject) {
        this.retrievePricingCountry401ApplicationJSONObject = retrievePricingCountry401ApplicationJSONObject;
        return this;
    }
}