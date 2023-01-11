package openapisdk.models.operations;



public class DeleteVideoFromPortfolioRequest {
    public DeleteVideoFromPortfolioPathParams pathParams;
    public DeleteVideoFromPortfolioRequest withPathParams(DeleteVideoFromPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoFromPortfolioSecurity security;
    public DeleteVideoFromPortfolioRequest withSecurity(DeleteVideoFromPortfolioSecurity security) {
        this.security = security;
        return this;
    }
}