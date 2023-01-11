package openapisdk.models.operations;



public class GetEditorialImageLivefeedItemsResponse {
    public String contentType;
    public GetEditorialImageLivefeedItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object editorialImageContentDataList;
    public GetEditorialImageLivefeedItemsResponse withEditorialImageContentDataList(Object editorialImageContentDataList) {
        this.editorialImageContentDataList = editorialImageContentDataList;
        return this;
    }
    public Long statusCode;
    public GetEditorialImageLivefeedItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}