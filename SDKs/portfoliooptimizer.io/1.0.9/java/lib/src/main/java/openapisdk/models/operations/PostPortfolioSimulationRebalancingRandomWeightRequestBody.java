package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioSimulationRebalancingRandomWeightRequestBody {
    @JsonProperty("assets")
    public PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets[] assets;
    public PostPortfolioSimulationRebalancingRandomWeightRequestBody withAssets(PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolios")
    public Long portfolios;
    public PostPortfolioSimulationRebalancingRandomWeightRequestBody withPortfolios(Long portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}