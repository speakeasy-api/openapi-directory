package openapisdk.models.operations;



public class GetPricingResponse {
    public String contentType;
    public GetPricingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPricingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPricing200ApplicationJson getPricing200ApplicationJSONObject;
    public GetPricingResponse withGetPricing200ApplicationJsonObject(GetPricing200ApplicationJson getPricing200ApplicationJSONObject) {
        this.getPricing200ApplicationJSONObject = getPricing200ApplicationJSONObject;
        return this;
    }
}