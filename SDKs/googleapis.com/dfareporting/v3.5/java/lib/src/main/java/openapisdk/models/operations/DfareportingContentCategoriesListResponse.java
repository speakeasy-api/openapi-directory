package openapisdk.models.operations;



public class DfareportingContentCategoriesListResponse {
    public openapisdk.models.shared.ContentCategoriesListResponse contentCategoriesListResponse;
    public DfareportingContentCategoriesListResponse withContentCategoriesListResponse(openapisdk.models.shared.ContentCategoriesListResponse contentCategoriesListResponse) {
        this.contentCategoriesListResponse = contentCategoriesListResponse;
        return this;
    }
    public String contentType;
    public DfareportingContentCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingContentCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}