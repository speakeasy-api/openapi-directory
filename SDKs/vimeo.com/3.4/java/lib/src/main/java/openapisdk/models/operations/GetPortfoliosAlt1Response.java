package openapisdk.models.operations;



public class GetPortfoliosAlt1Response {
    public String contentType;
    public GetPortfoliosAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPortfoliosAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Portfolio[] portfolios;
    public GetPortfoliosAlt1Response withPortfolios(openapisdk.models.shared.Portfolio[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}