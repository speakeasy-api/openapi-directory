package openapisdk.models.operations;



public class FaresResponse {
    public String contentType;
    public FaresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String fares200ApplicationJSONString;
    public FaresResponse withFares200ApplicationJsonString(String fares200ApplicationJSONString) {
        this.fares200ApplicationJSONString = fares200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public FaresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}