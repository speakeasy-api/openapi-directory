package openapisdk.models.operations;



public class ListVideoCategoriesResponse {
    public Object categoryDataList;
    public ListVideoCategoriesResponse withCategoryDataList(Object categoryDataList) {
        this.categoryDataList = categoryDataList;
        return this;
    }
    public String contentType;
    public ListVideoCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListVideoCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}