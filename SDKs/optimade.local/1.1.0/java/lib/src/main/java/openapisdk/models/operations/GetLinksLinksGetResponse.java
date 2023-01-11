package openapisdk.models.operations;



public class GetLinksLinksGetResponse {
    public String contentType;
    public GetLinksLinksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetLinksLinksGetResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.LinksResponse linksResponse;
    public GetLinksLinksGetResponse withLinksResponse(openapisdk.models.shared.LinksResponse linksResponse) {
        this.linksResponse = linksResponse;
        return this;
    }
    public Long statusCode;
    public GetLinksLinksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}