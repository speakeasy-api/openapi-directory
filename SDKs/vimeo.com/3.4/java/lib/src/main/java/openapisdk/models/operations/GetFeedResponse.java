package openapisdk.models.operations;



public class GetFeedResponse {
    public String contentType;
    public GetFeedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFeedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Activity31[] activity31s;
    public GetFeedResponse withActivity31s(openapisdk.models.shared.Activity31[] activity31s) {
        this.activity31s = activity31s;
        return this;
    }
}