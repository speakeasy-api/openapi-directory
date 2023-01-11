package openapisdk.models.operations;



public class GetVideosAlt1Response {
    public String contentType;
    public GetVideosAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideosAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetVideosAlt1Response withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}