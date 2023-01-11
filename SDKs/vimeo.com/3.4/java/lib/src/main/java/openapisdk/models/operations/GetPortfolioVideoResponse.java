package openapisdk.models.operations;



public class GetPortfolioVideoResponse {
    public String contentType;
    public GetPortfolioVideoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPortfolioVideoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public GetPortfolioVideoResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}