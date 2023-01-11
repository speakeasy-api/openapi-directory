package openapisdk.models.operations;



public class GetTracksTrackIdCommentsResponse {
    public String contentType;
    public GetTracksTrackIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTracksTrackIdCommentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTracksTrackIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getTracksTrackIdComments200ApplicationJSONOneOf;
    public GetTracksTrackIdCommentsResponse withGetTracksTrackIdComments200ApplicationJsonOneOf(Object getTracksTrackIdComments200ApplicationJSONOneOf) {
        this.getTracksTrackIdComments200ApplicationJSONOneOf = getTracksTrackIdComments200ApplicationJSONOneOf;
        return this;
    }
}