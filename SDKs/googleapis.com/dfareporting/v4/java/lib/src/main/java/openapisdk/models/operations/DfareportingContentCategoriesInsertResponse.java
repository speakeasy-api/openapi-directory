package openapisdk.models.operations;



public class DfareportingContentCategoriesInsertResponse {
    public openapisdk.models.shared.ContentCategory contentCategory;
    public DfareportingContentCategoriesInsertResponse withContentCategory(openapisdk.models.shared.ContentCategory contentCategory) {
        this.contentCategory = contentCategory;
        return this;
    }
    public String contentType;
    public DfareportingContentCategoriesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingContentCategoriesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}