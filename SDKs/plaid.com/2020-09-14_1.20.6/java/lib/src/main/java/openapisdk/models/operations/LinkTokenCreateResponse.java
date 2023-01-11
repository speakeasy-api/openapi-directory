package openapisdk.models.operations;



public class LinkTokenCreateResponse {
    public String contentType;
    public LinkTokenCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> linkTokenCreateResponse;
    public LinkTokenCreateResponse withLinkTokenCreateResponse(java.util.Map<String, Object> linkTokenCreateResponse) {
        this.linkTokenCreateResponse = linkTokenCreateResponse;
        return this;
    }
    public Long statusCode;
    public LinkTokenCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}