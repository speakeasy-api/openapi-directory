package openapisdk.models.operations;



public class ListResponse {
    public byte[] body;
    public ListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public ListResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public ListResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Long statusCode;
    public ListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subscriptionList;
    public ListResponse withSubscriptionList(Object subscriptionList) {
        this.subscriptionList = subscriptionList;
        return this;
    }
}