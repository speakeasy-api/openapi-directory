package openapisdk.models.operations;



public class AddVideoToPortfolioRequest {
    public AddVideoToPortfolioPathParams pathParams;
    public AddVideoToPortfolioRequest withPathParams(AddVideoToPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoToPortfolioSecurity security;
    public AddVideoToPortfolioRequest withSecurity(AddVideoToPortfolioSecurity security) {
        this.security = security;
        return this;
    }
}