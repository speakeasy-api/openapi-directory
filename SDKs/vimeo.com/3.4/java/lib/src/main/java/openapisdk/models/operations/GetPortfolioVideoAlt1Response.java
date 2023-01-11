package openapisdk.models.operations;



public class GetPortfolioVideoAlt1Response {
    public String contentType;
    public GetPortfolioVideoAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPortfolioVideoAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public GetPortfolioVideoAlt1Response withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}