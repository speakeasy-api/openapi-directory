package openapisdk.models.operations;



public class GetCategoryResponse {
    public String contentType;
    public GetCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Category category;
    public GetCategoryResponse withCategory(openapisdk.models.shared.Category category) {
        this.category = category;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCategoryResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}