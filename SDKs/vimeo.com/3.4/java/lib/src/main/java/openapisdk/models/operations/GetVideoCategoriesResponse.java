package openapisdk.models.operations;



public class GetVideoCategoriesResponse {
    public String contentType;
    public GetVideoCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Category[] categories;
    public GetVideoCategoriesResponse withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVideoCategoriesResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}