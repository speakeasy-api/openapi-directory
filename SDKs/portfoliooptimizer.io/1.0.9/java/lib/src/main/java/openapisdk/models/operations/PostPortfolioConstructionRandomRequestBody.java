package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioConstructionRandomRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioConstructionRandomRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioConstructionRandomRequestBodyConstraints constraints;
    public PostPortfolioConstructionRandomRequestBody withConstraints(PostPortfolioConstructionRandomRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolios")
    public Long portfolios;
    public PostPortfolioConstructionRandomRequestBody withPortfolios(Long portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}