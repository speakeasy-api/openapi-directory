package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfolioVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_id")
    public Double portfolioId;
    public GetPortfolioVideoPathParams withPortfolioId(Double portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetPortfolioVideoPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetPortfolioVideoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}