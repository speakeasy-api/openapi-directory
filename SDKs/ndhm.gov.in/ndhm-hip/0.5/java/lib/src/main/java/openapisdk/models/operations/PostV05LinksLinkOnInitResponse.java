package openapisdk.models.operations;



public class PostV05LinksLinkOnInitResponse {
    public byte[] body;
    public PostV05LinksLinkOnInitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05LinksLinkOnInitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05LinksLinkOnInitResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05LinksLinkOnInitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}