package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioConstructionMimickingRequestBody {
    @JsonProperty("assets")
    public PostPortfolioConstructionMimickingRequestBodyAssets[] assets;
    public PostPortfolioConstructionMimickingRequestBody withAssets(PostPortfolioConstructionMimickingRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("benchmarkReturns")
    public Double[] benchmarkReturns;
    public PostPortfolioConstructionMimickingRequestBody withBenchmarkReturns(Double[] benchmarkReturns) {
        this.benchmarkReturns = benchmarkReturns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioConstructionMimickingRequestBodyConstraints constraints;
    public PostPortfolioConstructionMimickingRequestBody withConstraints(PostPortfolioConstructionMimickingRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
}