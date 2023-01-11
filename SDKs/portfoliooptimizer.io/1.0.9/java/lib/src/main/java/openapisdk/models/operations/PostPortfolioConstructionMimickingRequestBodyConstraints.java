package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioConstructionMimickingRequestBodyConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroups")
    public Long[][] assetsGroups;
    public PostPortfolioConstructionMimickingRequestBodyConstraints withAssetsGroups(Long[][] assetsGroups) {
        this.assetsGroups = assetsGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroupsMatrix")
    public Double[][] assetsGroupsMatrix;
    public PostPortfolioConstructionMimickingRequestBodyConstraints withAssetsGroupsMatrix(Double[][] assetsGroupsMatrix) {
        this.assetsGroupsMatrix = assetsGroupsMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsGroupsWeights")
    public Double[] maximumAssetsGroupsWeights;
    public PostPortfolioConstructionMimickingRequestBodyConstraints withMaximumAssetsGroupsWeights(Double[] maximumAssetsGroupsWeights) {
        this.maximumAssetsGroupsWeights = maximumAssetsGroupsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsWeights")
    public Double[] maximumAssetsWeights;
    public PostPortfolioConstructionMimickingRequestBodyConstraints withMaximumAssetsWeights(Double[] maximumAssetsWeights) {
        this.maximumAssetsWeights = maximumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPortfolioExposure")
    public Double maximumPortfolioExposure;
    public PostPortfolioConstructionMimickingRequestBodyConstraints withMaximumPortfolioExposure(Double maximumPortfolioExposure) {
        this.maximumPortfolioExposure = maximumPortfolioExposure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumAssetsWeights")
    public Double[] minimumAssetsWeights;
    public PostPortfolioConstructionMimickingRequestBodyConstraints withMinimumAssetsWeights(Double[] minimumAssetsWeights) {
        this.minimumAssetsWeights = minimumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumPortfolioExposure")
    public Double minimumPortfolioExposure;
    public PostPortfolioConstructionMimickingRequestBodyConstraints withMinimumPortfolioExposure(Double minimumPortfolioExposure) {
        this.minimumPortfolioExposure = minimumPortfolioExposure;
        return this;
    }
}