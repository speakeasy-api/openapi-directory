package openapisdk.models.operations;



public class GetProjectVideosAlt1Response {
    public String contentType;
    public GetProjectVideosAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectVideosAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetProjectVideosAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetProjectVideosAlt1Response withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}