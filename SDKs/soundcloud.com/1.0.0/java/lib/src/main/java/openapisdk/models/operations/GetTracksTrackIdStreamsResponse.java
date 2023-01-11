package openapisdk.models.operations;



public class GetTracksTrackIdStreamsResponse {
    public String contentType;
    public GetTracksTrackIdStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTracksTrackIdStreamsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTracksTrackIdStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Streams streams;
    public GetTracksTrackIdStreamsResponse withStreams(openapisdk.models.shared.Streams streams) {
        this.streams = streams;
        return this;
    }
}