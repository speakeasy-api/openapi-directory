package openapisdk.models.operations;



public class GetCategorySubscriptionsResponse {
    public String contentType;
    public GetCategorySubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCategorySubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Category[] categories;
    public GetCategorySubscriptionsResponse withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCategorySubscriptionsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}