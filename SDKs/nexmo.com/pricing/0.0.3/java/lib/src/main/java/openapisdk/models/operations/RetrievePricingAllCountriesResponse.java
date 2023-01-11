package openapisdk.models.operations;



public class RetrievePricingAllCountriesResponse {
    public String contentType;
    public RetrievePricingAllCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pricingCountriesResponse;
    public RetrievePricingAllCountriesResponse withPricingCountriesResponse(Object pricingCountriesResponse) {
        this.pricingCountriesResponse = pricingCountriesResponse;
        return this;
    }
    public Long statusCode;
    public RetrievePricingAllCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrievePricingAllCountries400ApplicationJson retrievePricingAllCountries400ApplicationJSONObject;
    public RetrievePricingAllCountriesResponse withRetrievePricingAllCountries400ApplicationJsonObject(RetrievePricingAllCountries400ApplicationJson retrievePricingAllCountries400ApplicationJSONObject) {
        this.retrievePricingAllCountries400ApplicationJSONObject = retrievePricingAllCountries400ApplicationJSONObject;
        return this;
    }
    public RetrievePricingAllCountries401ApplicationJson retrievePricingAllCountries401ApplicationJSONObject;
    public RetrievePricingAllCountriesResponse withRetrievePricingAllCountries401ApplicationJsonObject(RetrievePricingAllCountries401ApplicationJson retrievePricingAllCountries401ApplicationJSONObject) {
        this.retrievePricingAllCountries401ApplicationJSONObject = retrievePricingAllCountries401ApplicationJSONObject;
        return this;
    }
}