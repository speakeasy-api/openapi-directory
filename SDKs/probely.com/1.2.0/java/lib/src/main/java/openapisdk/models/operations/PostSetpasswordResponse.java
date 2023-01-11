package openapisdk.models.operations;



public class PostSetpasswordResponse {
    public String contentType;
    public PostSetpasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetpasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostSetpassword200ApplicationJson postSetpassword200ApplicationJSONObject;
    public PostSetpasswordResponse withPostSetpassword200ApplicationJsonObject(PostSetpassword200ApplicationJson postSetpassword200ApplicationJSONObject) {
        this.postSetpassword200ApplicationJSONObject = postSetpassword200ApplicationJSONObject;
        return this;
    }
    public PostSetpassword400ApplicationJson postSetpassword400ApplicationJSONObject;
    public PostSetpasswordResponse withPostSetpassword400ApplicationJsonObject(PostSetpassword400ApplicationJson postSetpassword400ApplicationJSONObject) {
        this.postSetpassword400ApplicationJSONObject = postSetpassword400ApplicationJSONObject;
        return this;
    }
}