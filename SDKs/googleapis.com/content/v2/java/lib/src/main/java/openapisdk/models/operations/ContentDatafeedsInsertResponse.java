package openapisdk.models.operations;



public class ContentDatafeedsInsertResponse {
    public String contentType;
    public ContentDatafeedsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Datafeed datafeed;
    public ContentDatafeedsInsertResponse withDatafeed(openapisdk.models.shared.Datafeed datafeed) {
        this.datafeed = datafeed;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}