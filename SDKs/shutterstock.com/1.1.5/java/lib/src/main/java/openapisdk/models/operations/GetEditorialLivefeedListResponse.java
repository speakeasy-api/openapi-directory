package openapisdk.models.operations;



public class GetEditorialLivefeedListResponse {
    public String contentType;
    public GetEditorialLivefeedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialLivefeedList editorialLivefeedList;
    public GetEditorialLivefeedListResponse withEditorialLivefeedList(openapisdk.models.shared.EditorialLivefeedList editorialLivefeedList) {
        this.editorialLivefeedList = editorialLivefeedList;
        return this;
    }
    public Long statusCode;
    public GetEditorialLivefeedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}