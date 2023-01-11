package openapisdk.models.operations;



public class BooksOnboardingListCategoriesResponse {
    public openapisdk.models.shared.Category category;
    public BooksOnboardingListCategoriesResponse withCategory(openapisdk.models.shared.Category category) {
        this.category = category;
        return this;
    }
    public String contentType;
    public BooksOnboardingListCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksOnboardingListCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}