package openapisdk.models.operations;



public class DfareportingContentCategoriesPatchResponse {
    public openapisdk.models.shared.ContentCategory contentCategory;
    public DfareportingContentCategoriesPatchResponse withContentCategory(openapisdk.models.shared.ContentCategory contentCategory) {
        this.contentCategory = contentCategory;
        return this;
    }
    public String contentType;
    public DfareportingContentCategoriesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingContentCategoriesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}