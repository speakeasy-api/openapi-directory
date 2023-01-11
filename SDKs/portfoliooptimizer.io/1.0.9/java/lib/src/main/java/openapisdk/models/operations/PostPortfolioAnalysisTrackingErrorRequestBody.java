package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisTrackingErrorRequestBody {
    @JsonProperty("benchmarkReturns")
    public Double[] benchmarkReturns;
    public PostPortfolioAnalysisTrackingErrorRequestBody withBenchmarkReturns(Double[] benchmarkReturns) {
        this.benchmarkReturns = benchmarkReturns;
        return this;
    }
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios[] portfolios;
    public PostPortfolioAnalysisTrackingErrorRequestBody withPortfolios(PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}