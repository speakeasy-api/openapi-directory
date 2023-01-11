package openapisdk.models.operations;



public class GetPortfolioResponse {
    public String contentType;
    public GetPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Portfolio portfolio;
    public GetPortfolioResponse withPortfolio(openapisdk.models.shared.Portfolio portfolio) {
        this.portfolio = portfolio;
        return this;
    }
}