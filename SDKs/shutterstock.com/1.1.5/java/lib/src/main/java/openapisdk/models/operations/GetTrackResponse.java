package openapisdk.models.operations;



public class GetTrackResponse {
    public openapisdk.models.shared.Audio audio;
    public GetTrackResponse withAudio(openapisdk.models.shared.Audio audio) {
        this.audio = audio;
        return this;
    }
    public String contentType;
    public GetTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}