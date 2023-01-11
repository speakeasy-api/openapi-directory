package openapisdk.models.operations;



public class PostNetworksResponse {
    public String contentType;
    public PostNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostNetworks201ApplicationJson postNetworks201ApplicationJSONObject;
    public PostNetworksResponse withPostNetworks201ApplicationJsonObject(PostNetworks201ApplicationJson postNetworks201ApplicationJSONObject) {
        this.postNetworks201ApplicationJSONObject = postNetworks201ApplicationJSONObject;
        return this;
    }
}