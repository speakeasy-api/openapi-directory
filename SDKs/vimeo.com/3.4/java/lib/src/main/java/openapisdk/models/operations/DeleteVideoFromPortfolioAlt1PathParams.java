package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVideoFromPortfolioAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_id")
    public Double portfolioId;
    public DeleteVideoFromPortfolioAlt1PathParams withPortfolioId(Double portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public DeleteVideoFromPortfolioAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}