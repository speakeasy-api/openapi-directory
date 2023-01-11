package openapisdk.models.operations;



public class DfareportingContentCategoriesUpdateResponse {
    public openapisdk.models.shared.ContentCategory contentCategory;
    public DfareportingContentCategoriesUpdateResponse withContentCategory(openapisdk.models.shared.ContentCategory contentCategory) {
        this.contentCategory = contentCategory;
        return this;
    }
    public String contentType;
    public DfareportingContentCategoriesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingContentCategoriesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}