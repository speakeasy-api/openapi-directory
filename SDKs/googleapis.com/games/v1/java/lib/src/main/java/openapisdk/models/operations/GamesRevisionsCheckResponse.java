package openapisdk.models.operations;



public class GamesRevisionsCheckResponse {
    public String contentType;
    public GamesRevisionsCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RevisionCheckResponse revisionCheckResponse;
    public GamesRevisionsCheckResponse withRevisionCheckResponse(openapisdk.models.shared.RevisionCheckResponse revisionCheckResponse) {
        this.revisionCheckResponse = revisionCheckResponse;
        return this;
    }
    public Long statusCode;
    public GamesRevisionsCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}