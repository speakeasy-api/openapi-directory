package openapisdk.models.operations;



public class PostV05LinksLinkOnAddContextsResponse {
    public byte[] body;
    public PostV05LinksLinkOnAddContextsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05LinksLinkOnAddContextsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05LinksLinkOnAddContextsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05LinksLinkOnAddContextsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}