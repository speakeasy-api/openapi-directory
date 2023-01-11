package openapisdk.models.operations;



public class GetOfferingsInfoTextPatternResponse {
    public String contentType;
    public GetOfferingsInfoTextPatternResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsInfoTextPatternResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PortfolioActivations[] portfolioActivations;
    public GetOfferingsInfoTextPatternResponse withPortfolioActivations(openapisdk.models.shared.PortfolioActivations[] portfolioActivations) {
        this.portfolioActivations = portfolioActivations;
        return this;
    }
    public Long statusCode;
    public GetOfferingsInfoTextPatternResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}