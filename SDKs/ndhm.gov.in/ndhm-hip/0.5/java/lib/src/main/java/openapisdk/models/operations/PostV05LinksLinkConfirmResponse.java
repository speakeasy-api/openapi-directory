package openapisdk.models.operations;



public class PostV05LinksLinkConfirmResponse {
    public byte[] body;
    public PostV05LinksLinkConfirmResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05LinksLinkConfirmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05LinksLinkConfirmResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05LinksLinkConfirmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}