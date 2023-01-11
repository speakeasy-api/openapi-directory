import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PortfolioAnalysis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postPortfolioAnalysisAlpha - Alpha
     *
     * Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisAlpha(req: operations.PostPortfolioAnalysisAlphaRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisAlphaResponse>;
    /**
     * postPortfolioAnalysisBeta - Beta
     *
     * Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM)..
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisBeta(req: operations.PostPortfolioAnalysisBetaRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisBetaResponse>;
    /**
     * postPortfolioAnalysisContributionsReturn - Return Contributions
     *
     * Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisContributionsReturn(req: operations.PostPortfolioAnalysisContributionsReturnRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisContributionsReturnResponse>;
    /**
     * postPortfolioAnalysisContributionsRisk - Risk Contributions
     *
     * Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisContributionsRisk(req: operations.PostPortfolioAnalysisContributionsRiskRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisContributionsRiskResponse>;
    /**
     * postPortfolioAnalysisDiversificationRatio - Diversification Ratio
     *
     * Compute the diversification ratio of one or several portfolio(s).
     *
     * References
     * * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
     *
    **/
    postPortfolioAnalysisDiversificationRatio(req: operations.PostPortfolioAnalysisDiversificationRatioRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisDiversificationRatioResponse>;
    /**
     * postPortfolioAnalysisDrawdowns - Drawdowns
     *
     * Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
     *
     * References
     * * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))
     *
    **/
    postPortfolioAnalysisDrawdowns(req: operations.PostPortfolioAnalysisDrawdownsRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisDrawdownsResponse>;
    /**
     * postPortfolioAnalysisFactorExposures - Factor Exposures
     *
     * Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
     *
     * References
     * * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)
     *
    **/
    postPortfolioAnalysisFactorExposures(req: operations.PostPortfolioAnalysisFactorExposuresRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisFactorExposuresResponse>;
    /**
     * postPortfolioAnalysisMeanVarianceEfficientFrontier - Mean-Variance Efficient Frontier
     *
     * Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraint
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
    **/
    postPortfolioAnalysisMeanVarianceEfficientFrontier(req: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse>;
    /**
     * postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier - Mean-Variance Minimum Variance Frontier
     *
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
    **/
    postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(req: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse>;
    /**
     * postPortfolioAnalysisReturn - Arithmetic Return
     *
     * Compute the arithmetic return of one or several portfolio(s) from either:
     * * Portfolio assets arithmetic returns
     * * Portfolio values
     *
     * References
     * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
    **/
    postPortfolioAnalysisReturn(req: operations.PostPortfolioAnalysisReturnRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisReturnResponse>;
    /**
     * postPortfolioAnalysisReturnsAverage - Arithmetic Average Return
     *
     * Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
     *
     * References
     * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
     *
    **/
    postPortfolioAnalysisReturnsAverage(req: operations.PostPortfolioAnalysisReturnsAverageRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisReturnsAverageResponse>;
    /**
     * postPortfolioAnalysisSharpeRatio - Sharpe Ratio
     *
     * Compute the Sharpe ratio of one or several portfolio(s) from either:
     * * Portfolio assets arithmetic returns and assets covariance matrix
     * * Portfolio values
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
    **/
    postPortfolioAnalysisSharpeRatio(req: operations.PostPortfolioAnalysisSharpeRatioRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisSharpeRatioResponse>;
    /**
     * postPortfolioAnalysisTrackingError - Tracking Error
     *
     * Compute the tracking error between a benchmark and one or several portfolio(s).
     *
     * References
     * * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisTrackingError(req: operations.PostPortfolioAnalysisTrackingErrorRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisTrackingErrorResponse>;
    /**
     * postPortfolioAnalysisVolatility - Volatility
     *
     * Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:
     * * Portfolio assets covariance matrix
     * * Portfolio values
     *
     * References
     * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
    **/
    postPortfolioAnalysisVolatility(req: operations.PostPortfolioAnalysisVolatilityRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisVolatilityResponse>;
}
