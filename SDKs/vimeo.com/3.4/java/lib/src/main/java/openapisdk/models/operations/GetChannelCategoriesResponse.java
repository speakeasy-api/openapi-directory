package openapisdk.models.operations;



public class GetChannelCategoriesResponse {
    public String contentType;
    public GetChannelCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Category[] categories;
    public GetChannelCategoriesResponse withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetChannelCategoriesResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}