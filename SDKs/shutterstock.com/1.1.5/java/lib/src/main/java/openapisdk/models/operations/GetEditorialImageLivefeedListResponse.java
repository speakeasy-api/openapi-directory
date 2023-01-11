package openapisdk.models.operations;



public class GetEditorialImageLivefeedListResponse {
    public String contentType;
    public GetEditorialImageLivefeedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialImageLivefeedList editorialImageLivefeedList;
    public GetEditorialImageLivefeedListResponse withEditorialImageLivefeedList(openapisdk.models.shared.EditorialImageLivefeedList editorialImageLivefeedList) {
        this.editorialImageLivefeedList = editorialImageLivefeedList;
        return this;
    }
    public Long statusCode;
    public GetEditorialImageLivefeedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}