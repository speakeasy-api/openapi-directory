package operations

type PostPortfolioAnalysisReturn200ApplicationJSONPortfolios struct {
	PortfolioReturn float64 `json:"portfolioReturn"`
}

type PostPortfolioAnalysisReturn200ApplicationJSON struct {
	Portfolios []PostPortfolioAnalysisReturn200ApplicationJSONPortfolios `json:"portfolios"`
}

type PostPortfolioAnalysisReturnRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostPortfolioAnalysisReturnResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	PostPortfolioAnalysisReturn200ApplicationJSONObject *PostPortfolioAnalysisReturn200ApplicationJSON
}
