package openapisdk.models.operations;



public class ListChannelsResponse {
    public String contentType;
    public ListChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> listChannels200ApplicationJSONObject;
    public ListChannelsResponse withListChannels200ApplicationJsonObject(java.util.Map<String, Object> listChannels200ApplicationJSONObject) {
        this.listChannels200ApplicationJSONObject = listChannels200ApplicationJSONObject;
        return this;
    }
}