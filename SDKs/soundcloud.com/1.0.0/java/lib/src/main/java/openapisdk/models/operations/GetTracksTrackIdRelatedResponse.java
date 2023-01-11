package openapisdk.models.operations;



public class GetTracksTrackIdRelatedResponse {
    public String contentType;
    public GetTracksTrackIdRelatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTracksTrackIdRelatedResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTracksTrackIdRelatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getTracksTrackIdRelated200ApplicationJSONOneOf;
    public GetTracksTrackIdRelatedResponse withGetTracksTrackIdRelated200ApplicationJsonOneOf(Object getTracksTrackIdRelated200ApplicationJSONOneOf) {
        this.getTracksTrackIdRelated200ApplicationJSONOneOf = getTracksTrackIdRelated200ApplicationJSONOneOf;
        return this;
    }
}