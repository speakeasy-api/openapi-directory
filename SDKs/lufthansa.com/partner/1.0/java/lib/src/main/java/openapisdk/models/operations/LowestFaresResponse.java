package openapisdk.models.operations;



public class LowestFaresResponse {
    public String contentType;
    public LowestFaresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String lowestFares200ApplicationJSONString;
    public LowestFaresResponse withLowestFares200ApplicationJsonString(String lowestFares200ApplicationJSONString) {
        this.lowestFares200ApplicationJSONString = lowestFares200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public LowestFaresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}