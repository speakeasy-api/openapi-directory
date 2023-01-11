package openapisdk.models.operations;



public class PostV05LinksLinkOnConfirmResponse {
    public byte[] body;
    public PostV05LinksLinkOnConfirmResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostV05LinksLinkOnConfirmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostV05LinksLinkOnConfirmResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostV05LinksLinkOnConfirmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}