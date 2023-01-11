package openapisdk.models.operations;



public class GetShowsResponse {
    public byte[] body;
    public GetShowsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetShowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetShowsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetShowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetShows200ApplicationJson getShows200ApplicationJSONObject;
    public GetShowsResponse withGetShows200ApplicationJsonObject(GetShows200ApplicationJson getShows200ApplicationJSONObject) {
        this.getShows200ApplicationJSONObject = getShows200ApplicationJSONObject;
        return this;
    }
}