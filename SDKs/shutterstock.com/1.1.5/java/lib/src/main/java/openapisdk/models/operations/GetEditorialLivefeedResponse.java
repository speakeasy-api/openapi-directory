package openapisdk.models.operations;



public class GetEditorialLivefeedResponse {
    public String contentType;
    public GetEditorialLivefeedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialLivefeed editorialLivefeed;
    public GetEditorialLivefeedResponse withEditorialLivefeed(openapisdk.models.shared.EditorialLivefeed editorialLivefeed) {
        this.editorialLivefeed = editorialLivefeed;
        return this;
    }
    public Long statusCode;
    public GetEditorialLivefeedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}