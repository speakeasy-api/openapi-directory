package openapisdk.models.operations;



public class PostKeysResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public PostKeysResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public PostKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostKeys401ApplicationJson postKeys401ApplicationJSONObject;
    public PostKeysResponse withPostKeys401ApplicationJsonObject(PostKeys401ApplicationJson postKeys401ApplicationJSONObject) {
        this.postKeys401ApplicationJSONObject = postKeys401ApplicationJSONObject;
        return this;
    }
    public PostKeys403ApplicationJson postKeys403ApplicationJSONObject;
    public PostKeysResponse withPostKeys403ApplicationJsonObject(PostKeys403ApplicationJson postKeys403ApplicationJSONObject) {
        this.postKeys403ApplicationJSONObject = postKeys403ApplicationJSONObject;
        return this;
    }
}