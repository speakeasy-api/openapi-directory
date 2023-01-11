package openapisdk.models.operations;



public class GetPortfoliosResponse {
    public String contentType;
    public GetPortfoliosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPortfoliosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Portfolio[] portfolios;
    public GetPortfoliosResponse withPortfolios(openapisdk.models.shared.Portfolio[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}