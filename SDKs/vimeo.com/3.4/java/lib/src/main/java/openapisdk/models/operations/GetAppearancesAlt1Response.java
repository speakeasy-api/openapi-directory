package openapisdk.models.operations;



public class GetAppearancesAlt1Response {
    public String contentType;
    public GetAppearancesAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppearancesAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetAppearancesAlt1Response withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}