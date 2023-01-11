package openapisdk.models.operations;



public class DfareportingContentCategoriesGetResponse {
    public openapisdk.models.shared.ContentCategory contentCategory;
    public DfareportingContentCategoriesGetResponse withContentCategory(openapisdk.models.shared.ContentCategory contentCategory) {
        this.contentCategory = contentCategory;
        return this;
    }
    public String contentType;
    public DfareportingContentCategoriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingContentCategoriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}