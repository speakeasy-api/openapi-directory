package openapisdk.models.operations;



public class GetEditorialImageLivefeedResponse {
    public String contentType;
    public GetEditorialImageLivefeedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialImageLivefeed editorialImageLivefeed;
    public GetEditorialImageLivefeedResponse withEditorialImageLivefeed(openapisdk.models.shared.EditorialImageLivefeed editorialImageLivefeed) {
        this.editorialImageLivefeed = editorialImageLivefeed;
        return this;
    }
    public Long statusCode;
    public GetEditorialImageLivefeedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}