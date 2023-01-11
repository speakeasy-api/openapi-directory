package openapisdk.models.operations;



public class ViewOnlyLinksReadResponse {
    public byte[] body;
    public ViewOnlyLinksReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ViewOnlyLinksReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ViewOnlyLinksReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}