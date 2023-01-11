package openapisdk.models.operations;



public class PostAuthPollResponse {
    public String contentType;
    public PostAuthPollResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthPollResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAuthPoll200ApplicationJson postAuthPoll200ApplicationJSONObject;
    public PostAuthPollResponse withPostAuthPoll200ApplicationJsonObject(PostAuthPoll200ApplicationJson postAuthPoll200ApplicationJSONObject) {
        this.postAuthPoll200ApplicationJSONObject = postAuthPoll200ApplicationJSONObject;
        return this;
    }
}