package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroups")
    public Long[][] assetsGroups;
    public PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints withAssetsGroups(Long[][] assetsGroups) {
        this.assetsGroups = assetsGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroupsMatrix")
    public Double[][] assetsGroupsMatrix;
    public PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints withAssetsGroupsMatrix(Double[][] assetsGroupsMatrix) {
        this.assetsGroupsMatrix = assetsGroupsMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsGroupsWeights")
    public Double[] maximumAssetsGroupsWeights;
    public PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints withMaximumAssetsGroupsWeights(Double[] maximumAssetsGroupsWeights) {
        this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsWeights")
    public Double[] maximumAssetsWeights;
    public PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints withMaximumAssetsWeights(Double[] maximumAssetsWeights) {
        this.maximumAssetsWeights = maximumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPortfolioExposure")
    public Double maximumPortfolioExposure;
    public PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints withMaximumPortfolioExposure(Double maximumPortfolioExposure) {
        this.maximumPortfolioExposure = maximumPortfolioExposure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumAssetsWeights")
    public Double[] minimumAssetsWeights;
    public PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints withMinimumAssetsWeights(Double[] minimumAssetsWeights) {
        this.minimumAssetsWeights = minimumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumPortfolioExposure")
    public Double minimumPortfolioExposure;
    public PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints withMinimumPortfolioExposure(Double minimumPortfolioExposure) {
        this.minimumPortfolioExposure = minimumPortfolioExposure;
        return this;
    }
}