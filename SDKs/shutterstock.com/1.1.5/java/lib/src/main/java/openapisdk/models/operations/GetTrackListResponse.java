package openapisdk.models.operations;



public class GetTrackListResponse {
    public Object audioDataList;
    public GetTrackListResponse withAudioDataList(Object audioDataList) {
        this.audioDataList = audioDataList;
        return this;
    }
    public String contentType;
    public GetTrackListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}