package openapisdk.models.operations;



public class OndStatusResponse {
    public String contentType;
    public OndStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String ondStatus200ApplicationJSONString;
    public OndStatusResponse withOndStatus200ApplicationJsonString(String ondStatus200ApplicationJSONString) {
        this.ondStatus200ApplicationJSONString = ondStatus200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public OndStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}