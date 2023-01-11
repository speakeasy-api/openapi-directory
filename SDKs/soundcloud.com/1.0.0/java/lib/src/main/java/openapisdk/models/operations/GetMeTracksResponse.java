package openapisdk.models.operations;



public class GetMeTracksResponse {
    public String contentType;
    public GetMeTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getMeTracks200ApplicationJSONOneOf;
    public GetMeTracksResponse withGetMeTracks200ApplicationJsonOneOf(Object getMeTracks200ApplicationJSONOneOf) {
        this.getMeTracks200ApplicationJSONOneOf = getMeTracks200ApplicationJSONOneOf;
        return this;
    }
}