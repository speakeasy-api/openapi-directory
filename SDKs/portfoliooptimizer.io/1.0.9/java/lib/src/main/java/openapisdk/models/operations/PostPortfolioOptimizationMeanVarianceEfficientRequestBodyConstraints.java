package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroups")
    public Long[][] assetsGroups;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withAssetsGroups(Long[][] assetsGroups) {
        this.assetsGroups = assetsGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroupsMatrix")
    public Double[][] assetsGroupsMatrix;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withAssetsGroupsMatrix(Double[][] assetsGroupsMatrix) {
        this.assetsGroupsMatrix = assetsGroupsMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsGroupsWeights")
    public Double[] maximumAssetsGroupsWeights;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withMaximumAssetsGroupsWeights(Double[] maximumAssetsGroupsWeights) {
        this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsWeights")
    public Double[] maximumAssetsWeights;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withMaximumAssetsWeights(Double[] maximumAssetsWeights) {
        this.maximumAssetsWeights = maximumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPortfolioExposure")
    public Double maximumPortfolioExposure;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withMaximumPortfolioExposure(Double maximumPortfolioExposure) {
        this.maximumPortfolioExposure = maximumPortfolioExposure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumAssetsWeights")
    public Double[] minimumAssetsWeights;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withMinimumAssetsWeights(Double[] minimumAssetsWeights) {
        this.minimumAssetsWeights = minimumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumPortfolioExposure")
    public Double minimumPortfolioExposure;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withMinimumPortfolioExposure(Double minimumPortfolioExposure) {
        this.minimumPortfolioExposure = minimumPortfolioExposure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolioReturn")
    public Double portfolioReturn;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withPortfolioReturn(Double portfolioReturn) {
        this.portfolioReturn = portfolioReturn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolioVolatility")
    public Double portfolioVolatility;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withPortfolioVolatility(Double portfolioVolatility) {
        this.portfolioVolatility = portfolioVolatility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riskTolerance")
    public Double riskTolerance;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints withRiskTolerance(Double riskTolerance) {
        this.riskTolerance = riskTolerance;
        return this;
    }
}