package openapisdk.models.operations;



public class GetLikesResponse {
    public String contentType;
    public GetLikesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLikesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetLikesResponse withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}