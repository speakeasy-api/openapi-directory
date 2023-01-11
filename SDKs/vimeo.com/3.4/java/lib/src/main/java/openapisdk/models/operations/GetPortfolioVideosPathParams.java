package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfolioVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_id")
    public Double portfolioId;
    public GetPortfolioVideosPathParams withPortfolioId(Double portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetPortfolioVideosPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}