package openapisdk.models.operations;



public class GetPortfolioAlt1Response {
    public String contentType;
    public GetPortfolioAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPortfolioAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Portfolio portfolio;
    public GetPortfolioAlt1Response withPortfolio(openapisdk.models.shared.Portfolio portfolio) {
        this.portfolio = portfolio;
        return this;
    }
}