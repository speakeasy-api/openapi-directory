package openapisdk.models.operations;



public class ContentDatafeedsGetResponse {
    public String contentType;
    public ContentDatafeedsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Datafeed datafeed;
    public ContentDatafeedsGetResponse withDatafeed(openapisdk.models.shared.Datafeed datafeed) {
        this.datafeed = datafeed;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}