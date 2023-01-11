package openapisdk.models.operations;



public class ListImageCategoriesResponse {
    public Object categoryDataList;
    public ListImageCategoriesResponse withCategoryDataList(Object categoryDataList) {
        this.categoryDataList = categoryDataList;
        return this;
    }
    public String contentType;
    public ListImageCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListImageCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}