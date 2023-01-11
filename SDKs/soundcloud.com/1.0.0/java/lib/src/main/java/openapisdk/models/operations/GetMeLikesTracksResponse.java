package openapisdk.models.operations;



public class GetMeLikesTracksResponse {
    public String contentType;
    public GetMeLikesTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeLikesTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeLikesTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getMeLikesTracks200ApplicationJSONOneOf;
    public GetMeLikesTracksResponse withGetMeLikesTracks200ApplicationJsonOneOf(Object getMeLikesTracks200ApplicationJSONOneOf) {
        this.getMeLikesTracks200ApplicationJSONOneOf = getMeLikesTracks200ApplicationJSONOneOf;
        return this;
    }
}