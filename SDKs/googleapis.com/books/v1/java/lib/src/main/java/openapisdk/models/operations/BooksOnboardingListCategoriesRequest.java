package openapisdk.models.operations;



public class BooksOnboardingListCategoriesRequest {
    public BooksOnboardingListCategoriesQueryParams queryParams;
    public BooksOnboardingListCategoriesRequest withQueryParams(BooksOnboardingListCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksOnboardingListCategoriesSecurity security;
    public BooksOnboardingListCategoriesRequest withSecurity(BooksOnboardingListCategoriesSecurity security) {
        this.security = security;
        return this;
    }
}