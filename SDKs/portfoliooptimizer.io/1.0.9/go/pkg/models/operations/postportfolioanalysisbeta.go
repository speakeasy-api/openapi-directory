package operations

type PostPortfolioAnalysisBeta200ApplicationJSONPortfolios struct {
	PortfolioBeta float64 `json:"portfolioBeta"`
}

type PostPortfolioAnalysisBeta200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisBeta200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisBetaRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisBetaResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PostPortfolioAnalysisBeta200ApplicationJSONObject *PostPortfolioAnalysisBeta200ApplicationJSON
}
