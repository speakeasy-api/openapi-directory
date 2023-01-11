package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
    @JsonProperty("portfolioReturn")
    public Double portfolioReturn;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios withPortfolioReturn(Double portfolioReturn) {
        this.portfolioReturn = portfolioReturn;
        return this;
    }
    @JsonProperty("portfolioVolatility")
    public Double portfolioVolatility;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios withPortfolioVolatility(Double portfolioVolatility) {
        this.portfolioVolatility = portfolioVolatility;
        return this;
    }
}