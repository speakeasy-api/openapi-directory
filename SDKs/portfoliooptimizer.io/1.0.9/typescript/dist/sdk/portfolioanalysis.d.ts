import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortfolioAnalysis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Alpha
     *
     * @remarks
     * Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
     */
    postPortfolioAnalysisAlpha(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisAlphaResponse>;
    /**
     * Beta
     *
     * @remarks
     * Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
     */
    postPortfolioAnalysisBeta(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisBetaResponse>;
    /**
     * Conditional Value At Risk
     *
     * @remarks
     * Compute the conditional value at risk of one or several portfolio(s) from portfolio values.
     *
     * References
     * * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
     * * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)
     *
     */
    postPortfolioAnalysisConditionalValueAtRisk(req: operations.PostPortfolioAnalysisConditionalValueAtRiskRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisConditionalValueAtRiskResponse>;
    /**
     * Return Contributions
     *
     * @remarks
     * Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
     */
    postPortfolioAnalysisContributionsReturn(req: operations.PostPortfolioAnalysisContributionsReturnRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisContributionsReturnResponse>;
    /**
     * Risk Contributions
     *
     * @remarks
     * Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
     */
    postPortfolioAnalysisContributionsRisk(req: operations.PostPortfolioAnalysisContributionsRiskRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisContributionsRiskResponse>;
    /**
     * Correlation Spectrum
     *
     * @remarks
     * Compute the correlation spectrum of one or several portfolio(s).
     *
     * References
     * * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)
     *
     */
    postPortfolioAnalysisCorrelationSpectrum(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisCorrelationSpectrumResponse>;
    /**
     * Diversification Ratio
     *
     * @remarks
     * Compute the diversification ratio of one or several portfolio(s).
     *
     * References
     * * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
     * * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)
     *
     */
    postPortfolioAnalysisDiversificationRatio(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisDiversificationRatioResponse>;
    /**
     * Drawdowns
     *
     * @remarks
     * Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
     *
     * References
     * * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))
     *
     */
    postPortfolioAnalysisDrawdowns(req: operations.PostPortfolioAnalysisDrawdownsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisDrawdownsResponse>;
    /**
     * Effective Number of Bets
     *
     * @remarks
     * Compute the effective number of bets of one or several portfolio(s).
     *
     * References
     * * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632)
     *
     */
    postPortfolioAnalysisEffectiveNumberOfBets(req: operations.PostPortfolioAnalysisEffectiveNumberOfBetsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisEffectiveNumberOfBetsResponse>;
    /**
     * Factor Exposures
     *
     * @remarks
     * Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
     *
     * References
     * * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)
     *
     */
    postPortfolioAnalysisFactorsExposures(req: operations.PostPortfolioAnalysisFactorsExposuresRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisFactorsExposuresResponse>;
    /**
     * Mean-Variance Efficient Frontier
     *
     * @remarks
     * Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraint
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioAnalysisMeanVarianceEfficientFrontier(req: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse>;
    /**
     * Mean-Variance Minimum Variance Frontier
     *
     * @remarks
     * Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraint
     *
     * > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(req: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse>;
    /**
     * Arithmetic Return
     *
     * @remarks
     * Compute the arithmetic return of one or several portfolio(s) from either:
     * * Portfolio assets arithmetic returns
     * * Portfolio values
     *
     * References
     * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioAnalysisReturn(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisReturnResponse>;
    /**
     * Arithmetic Average Return
     *
     * @remarks
     * Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
     *
     * References
     * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
     *
     */
    postPortfolioAnalysisReturnsAverage(req: operations.PostPortfolioAnalysisReturnsAverageRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisReturnsAverageResponse>;
    /**
     * Tracking Error
     *
     * @remarks
     * Compute the tracking error between a benchmark and one or several portfolio(s).
     *
     * References
     * * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
     */
    postPortfolioAnalysisTrackingError(req: operations.PostPortfolioAnalysisTrackingErrorRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisTrackingErrorResponse>;
    /**
     * Ulcer Index
     *
     * @remarks
     * Compute the Ulcer Index of one or several portfolio(s).
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
     *
     */
    postPortfolioAnalysisUlcerIndex(req: operations.PostPortfolioAnalysisUlcerIndexRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisUlcerIndexResponse>;
    /**
     * Ulcer Performance Index
     *
     * @remarks
     * Compute the Ulcer Performance Index of one or several portfolio(s).
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
     *
     */
    postPortfolioAnalysisUlcerPerformanceIndex(req: operations.PostPortfolioAnalysisUlcerPerformanceIndexRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisUlcerPerformanceIndexResponse>;
    /**
     * Value At Risk
     *
     * @remarks
     * Compute the value at risk of one or several portfolio(s) from portfolio values.
     *
     * References
     * * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
     * * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)
     *
     */
    postPortfolioAnalysisValueAtRisk(req: operations.PostPortfolioAnalysisValueAtRiskRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisValueAtRiskResponse>;
    /**
     * Volatility
     *
     * @remarks
     * Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:
     * * Portfolio assets covariance matrix
     * * Portfolio values
     *
     * References
     * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioAnalysisVolatility(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisVolatilityResponse>;
}
