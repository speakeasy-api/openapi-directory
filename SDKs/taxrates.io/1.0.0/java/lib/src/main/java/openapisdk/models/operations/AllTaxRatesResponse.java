package openapisdk.models.operations;



public class AllTaxRatesResponse {
    public String contentType;
    public AllTaxRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllTaxRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AllTaxRates200ApplicationJson[] allTaxRates200ApplicationJSONObjects;
    public AllTaxRatesResponse withAllTaxRates200ApplicationJsonObjects(AllTaxRates200ApplicationJson[] allTaxRates200ApplicationJSONObjects) {
        this.allTaxRates200ApplicationJSONObjects = allTaxRates200ApplicationJSONObjects;
        return this;
    }
    public AllTaxRates500ApplicationJson allTaxRates500ApplicationJSONObject;
    public AllTaxRatesResponse withAllTaxRates500ApplicationJsonObject(AllTaxRates500ApplicationJson allTaxRates500ApplicationJSONObject) {
        this.allTaxRates500ApplicationJSONObject = allTaxRates500ApplicationJSONObject;
        return this;
    }
}