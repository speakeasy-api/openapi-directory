package openapisdk.models.operations;



public class FetchContentResponse {
    public String contentType;
    public FetchContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ContentV1Content contentV1Content;
    public FetchContentResponse withContentV1Content(openapisdk.models.shared.ContentV1Content contentV1Content) {
        this.contentV1Content = contentV1Content;
        return this;
    }
}