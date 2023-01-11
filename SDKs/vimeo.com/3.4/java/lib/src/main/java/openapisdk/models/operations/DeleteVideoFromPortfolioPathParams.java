package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVideoFromPortfolioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_id")
    public Double portfolioId;
    public DeleteVideoFromPortfolioPathParams withPortfolioId(Double portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public DeleteVideoFromPortfolioPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public DeleteVideoFromPortfolioPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}