package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns {
    @JsonProperty("drawdownBottom")
    public Long drawdownBottom;
    public PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns withDrawdownBottom(Long drawdownBottom) {
        this.drawdownBottom = drawdownBottom;
        return this;
    }
    @JsonProperty("drawdownDepth")
    public Double drawdownDepth;
    public PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns withDrawdownDepth(Double drawdownDepth) {
        this.drawdownDepth = drawdownDepth;
        return this;
    }
    @JsonProperty("drawdownEnd")
    public Long drawdownEnd;
    public PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns withDrawdownEnd(Long drawdownEnd) {
        this.drawdownEnd = drawdownEnd;
        return this;
    }
    @JsonProperty("drawdownStart")
    public Long drawdownStart;
    public PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns withDrawdownStart(Long drawdownStart) {
        this.drawdownStart = drawdownStart;
        return this;
    }
}