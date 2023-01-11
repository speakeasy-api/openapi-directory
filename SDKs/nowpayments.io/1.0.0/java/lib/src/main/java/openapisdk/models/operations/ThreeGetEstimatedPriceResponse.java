package openapisdk.models.operations;



public class ThreeGetEstimatedPriceResponse {
    public ThreeGetEstimatedPrice200ApplicationJson threeGetEstimatedPrice200ApplicationJSONObject;
    public ThreeGetEstimatedPriceResponse withThreeGetEstimatedPrice200ApplicationJsonObject(ThreeGetEstimatedPrice200ApplicationJson threeGetEstimatedPrice200ApplicationJSONObject) {
        this.threeGetEstimatedPrice200ApplicationJSONObject = threeGetEstimatedPrice200ApplicationJSONObject;
        return this;
    }
    public String contentType;
    public ThreeGetEstimatedPriceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ThreeGetEstimatedPriceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ThreeGetEstimatedPriceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}