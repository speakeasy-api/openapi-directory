package openapisdk.models.operations;



public class OndRouteResponse {
    public String contentType;
    public OndRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String ondRoute200ApplicationJSONString;
    public OndRouteResponse withOndRoute200ApplicationJsonString(String ondRoute200ApplicationJSONString) {
        this.ondRoute200ApplicationJSONString = ondRoute200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public OndRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}