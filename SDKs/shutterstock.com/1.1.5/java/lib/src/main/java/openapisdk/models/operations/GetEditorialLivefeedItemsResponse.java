package openapisdk.models.operations;



public class GetEditorialLivefeedItemsResponse {
    public String contentType;
    public GetEditorialLivefeedItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object editorialContentDataList;
    public GetEditorialLivefeedItemsResponse withEditorialContentDataList(Object editorialContentDataList) {
        this.editorialContentDataList = editorialContentDataList;
        return this;
    }
    public Long statusCode;
    public GetEditorialLivefeedItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}