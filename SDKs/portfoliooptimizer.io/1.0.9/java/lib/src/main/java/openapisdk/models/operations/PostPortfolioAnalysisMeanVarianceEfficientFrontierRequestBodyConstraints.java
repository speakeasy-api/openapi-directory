package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroups")
    public Long[][] assetsGroups;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints withAssetsGroups(Long[][] assetsGroups) {
        this.assetsGroups = assetsGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroupsMatrix")
    public Double[][] assetsGroupsMatrix;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints withAssetsGroupsMatrix(Double[][] assetsGroupsMatrix) {
        this.assetsGroupsMatrix = assetsGroupsMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsGroupsWeights")
    public Double[] maximumAssetsGroupsWeights;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints withMaximumAssetsGroupsWeights(Double[] maximumAssetsGroupsWeights) {
        this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsWeights")
    public Double[] maximumAssetsWeights;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints withMaximumAssetsWeights(Double[] maximumAssetsWeights) {
        this.maximumAssetsWeights = maximumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPortfolioExposure")
    public Double maximumPortfolioExposure;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints withMaximumPortfolioExposure(Double maximumPortfolioExposure) {
        this.maximumPortfolioExposure = maximumPortfolioExposure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumAssetsWeights")
    public Double[] minimumAssetsWeights;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints withMinimumAssetsWeights(Double[] minimumAssetsWeights) {
        this.minimumAssetsWeights = minimumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumPortfolioExposure")
    public Double minimumPortfolioExposure;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints withMinimumPortfolioExposure(Double minimumPortfolioExposure) {
        this.minimumPortfolioExposure = minimumPortfolioExposure;
        return this;
    }
}