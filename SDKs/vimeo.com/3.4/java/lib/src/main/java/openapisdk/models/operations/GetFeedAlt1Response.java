package openapisdk.models.operations;



public class GetFeedAlt1Response {
    public String contentType;
    public GetFeedAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFeedAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Activity31[] activity31s;
    public GetFeedAlt1Response withActivity31s(openapisdk.models.shared.Activity31[] activity31s) {
        this.activity31s = activity31s;
        return this;
    }
}