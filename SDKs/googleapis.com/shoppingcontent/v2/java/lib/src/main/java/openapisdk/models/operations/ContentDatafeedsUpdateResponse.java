package openapisdk.models.operations;



public class ContentDatafeedsUpdateResponse {
    public String contentType;
    public ContentDatafeedsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Datafeed datafeed;
    public ContentDatafeedsUpdateResponse withDatafeed(openapisdk.models.shared.Datafeed datafeed) {
        this.datafeed = datafeed;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}