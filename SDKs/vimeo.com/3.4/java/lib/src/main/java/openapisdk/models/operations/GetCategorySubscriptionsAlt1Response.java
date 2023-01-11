package openapisdk.models.operations;



public class GetCategorySubscriptionsAlt1Response {
    public String contentType;
    public GetCategorySubscriptionsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCategorySubscriptionsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Category[] categories;
    public GetCategorySubscriptionsAlt1Response withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCategorySubscriptionsAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}