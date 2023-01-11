package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoToPortfolioAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_id")
    public Double portfolioId;
    public AddVideoToPortfolioAlt1PathParams withPortfolioId(Double portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public AddVideoToPortfolioAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}