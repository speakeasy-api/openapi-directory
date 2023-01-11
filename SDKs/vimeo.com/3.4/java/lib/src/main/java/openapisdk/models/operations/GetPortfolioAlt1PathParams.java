package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfolioAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_id")
    public Double portfolioId;
    public GetPortfolioAlt1PathParams withPortfolioId(Double portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
}