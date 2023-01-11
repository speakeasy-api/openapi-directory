package openapisdk.models.operations;



public class GetTracksResponse {
    public String contentType;
    public GetTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getTracks200ApplicationJSONOneOf;
    public GetTracksResponse withGetTracks200ApplicationJsonOneOf(Object getTracks200ApplicationJSONOneOf) {
        this.getTracks200ApplicationJSONOneOf = getTracks200ApplicationJSONOneOf;
        return this;
    }
}