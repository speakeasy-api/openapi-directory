package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioConstructionRandomRequestBodyConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumAssetsWeights")
    public Double[] maximumAssetsWeights;
    public PostPortfolioConstructionRandomRequestBodyConstraints withMaximumAssetsWeights(Double[] maximumAssetsWeights) {
        this.maximumAssetsWeights = maximumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPortfolioExposure")
    public Double maximumPortfolioExposure;
    public PostPortfolioConstructionRandomRequestBodyConstraints withMaximumPortfolioExposure(Double maximumPortfolioExposure) {
        this.maximumPortfolioExposure = maximumPortfolioExposure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumAssetsWeights")
    public Double[] minimumAssetsWeights;
    public PostPortfolioConstructionRandomRequestBodyConstraints withMinimumAssetsWeights(Double[] minimumAssetsWeights) {
        this.minimumAssetsWeights = minimumAssetsWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumPortfolioExposure")
    public Double minimumPortfolioExposure;
    public PostPortfolioConstructionRandomRequestBodyConstraints withMinimumPortfolioExposure(Double minimumPortfolioExposure) {
        this.minimumPortfolioExposure = minimumPortfolioExposure;
        return this;
    }
}