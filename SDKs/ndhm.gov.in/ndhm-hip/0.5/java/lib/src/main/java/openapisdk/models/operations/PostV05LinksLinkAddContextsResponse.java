package openapisdk.models.operations;



public class PostV05LinksLinkAddContextsResponse {
    public byte[] body;
    public PostV05LinksLinkAddContextsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05LinksLinkAddContextsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05LinksLinkAddContextsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05LinksLinkAddContextsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}