package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioConstructionInvestableRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioConstructionInvestableRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroups")
    public Long[][] assetsGroups;
    public PostPortfolioConstructionInvestableRequestBody withAssetsGroups(Long[][] assetsGroups) {
        this.assetsGroups = assetsGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroupsWeights")
    public Double[] assetsGroupsWeights;
    public PostPortfolioConstructionInvestableRequestBody withAssetsGroupsWeights(Double[] assetsGroupsWeights) {
        this.assetsGroupsWeights = assetsGroupsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsMinimumNotionalValues")
    public Double[] assetsMinimumNotionalValues;
    public PostPortfolioConstructionInvestableRequestBody withAssetsMinimumNotionalValues(Double[] assetsMinimumNotionalValues) {
        this.assetsMinimumNotionalValues = assetsMinimumNotionalValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsMinimumPositions")
    public Double[] assetsMinimumPositions;
    public PostPortfolioConstructionInvestableRequestBody withAssetsMinimumPositions(Double[] assetsMinimumPositions) {
        this.assetsMinimumPositions = assetsMinimumPositions;
        return this;
    }
    @JsonProperty("assetsPrices")
    public Double[] assetsPrices;
    public PostPortfolioConstructionInvestableRequestBody withAssetsPrices(Double[] assetsPrices) {
        this.assetsPrices = assetsPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsSizeLots")
    public Double[] assetsSizeLots;
    public PostPortfolioConstructionInvestableRequestBody withAssetsSizeLots(Double[] assetsSizeLots) {
        this.assetsSizeLots = assetsSizeLots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioConstructionInvestableRequestBody withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsGroupsWeights")
    public Double[] maximumAssetsGroupsWeights;
    public PostPortfolioConstructionInvestableRequestBody withMaximumAssetsGroupsWeights(Double[] maximumAssetsGroupsWeights) {
        this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
        return this;
    }
    @JsonProperty("portfolioValue")
    public Double portfolioValue;
    public PostPortfolioConstructionInvestableRequestBody withPortfolioValue(Double portfolioValue) {
        this.portfolioValue = portfolioValue;
        return this;
    }
}