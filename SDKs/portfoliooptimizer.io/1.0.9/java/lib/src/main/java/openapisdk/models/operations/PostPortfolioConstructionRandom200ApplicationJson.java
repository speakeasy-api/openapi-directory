package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioConstructionRandom200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioConstructionRandom200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioConstructionRandom200ApplicationJson withPortfolios(PostPortfolioConstructionRandom200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}