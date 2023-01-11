package openapisdk.models.operations;



public class GetChannelResponse {
    public String contentType;
    public GetChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getChannel200ApplicationJSONObject;
    public GetChannelResponse withGetChannel200ApplicationJsonObject(java.util.Map<String, Object> getChannel200ApplicationJSONObject) {
        this.getChannel200ApplicationJSONObject = getChannel200ApplicationJSONObject;
        return this;
    }
}