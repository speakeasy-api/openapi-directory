package openapisdk.models.operations;



public class PostV05LinksLinkInitResponse {
    public byte[] body;
    public PostV05LinksLinkInitResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05LinksLinkInitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05LinksLinkInitResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05LinksLinkInitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}