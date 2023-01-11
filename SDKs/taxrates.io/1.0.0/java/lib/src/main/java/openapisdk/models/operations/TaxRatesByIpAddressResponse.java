package openapisdk.models.operations;



public class TaxRatesByIpAddressResponse {
    public String contentType;
    public TaxRatesByIpAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaxRatesByIpAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaxRatesByIpAddress200ApplicationJson[] taxRatesByIpAddress200ApplicationJSONObjects;
    public TaxRatesByIpAddressResponse withTaxRatesByIpAddress200ApplicationJsonObjects(TaxRatesByIpAddress200ApplicationJson[] taxRatesByIpAddress200ApplicationJSONObjects) {
        this.taxRatesByIpAddress200ApplicationJSONObjects = taxRatesByIpAddress200ApplicationJSONObjects;
        return this;
    }
    public TaxRatesByIpAddress500ApplicationJson taxRatesByIpAddress500ApplicationJSONObject;
    public TaxRatesByIpAddressResponse withTaxRatesByIpAddress500ApplicationJsonObject(TaxRatesByIpAddress500ApplicationJson taxRatesByIpAddress500ApplicationJSONObject) {
        this.taxRatesByIpAddress500ApplicationJSONObject = taxRatesByIpAddress500ApplicationJSONObject;
        return this;
    }
}