package openapisdk.models.operations;



public class LinkTokenGetResponse {
    public String contentType;
    public LinkTokenGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> linkTokenGetResponse;
    public LinkTokenGetResponse withLinkTokenGetResponse(java.util.Map<String, Object> linkTokenGetResponse) {
        this.linkTokenGetResponse = linkTokenGetResponse;
        return this;
    }
    public Long statusCode;
    public LinkTokenGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}