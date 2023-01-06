package operations

type PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios struct {
	PortfolioAlpha float64 `json:"portfolioAlpha"`
}

type PostPortfolioAnalysisAlpha200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisAlphaRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisAlphaResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	PostPortfolioAnalysisAlpha200ApplicationJSONObject *PostPortfolioAnalysisAlpha200ApplicationJSON
}
