import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PortfolioOptimization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postPortfolioOptimizationEqualRiskContributions - Equal Risk Contributions Portfolio
     *
     * Compute the assets weights of the equal risk contributions portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     *
     * References
     *  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
     *
    **/
    postPortfolioOptimizationEqualRiskContributions(req: operations.PostPortfolioOptimizationEqualRiskContributionsRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualRiskContributionsResponse>;
    /**
     * postPortfolioOptimizationEqualSharpeRatioContributions - Equal Sharpe Ratio Contributions Portfolio
     *
     * Compute the assets weights of the equal Sharpe Ratio contributions portfolio.
     *
     * References
     *  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")
     *
    **/
    postPortfolioOptimizationEqualSharpeRatioContributions(req: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse>;
    /**
     * postPortfolioOptimizationEqualWeighted - Equal Weighted Portfolio
     *
     * Compute the assets weights of the equal-weighted portfolio.
     *
     * References
     *  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
     *
    **/
    postPortfolioOptimizationEqualWeighted(req: operations.PostPortfolioOptimizationEqualWeightedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualWeightedResponse>;
    /**
     * postPortfolioOptimizationInverseVarianceWeighted - Inverse Variance Weighted Portfolio
     *
     * Compute the assets weights of the inverse variance-weighted portfolio.
     *
     * References
     *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
     *
    **/
    postPortfolioOptimizationInverseVarianceWeighted(req: operations.PostPortfolioOptimizationInverseVarianceWeightedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationInverseVarianceWeightedResponse>;
    /**
     * postPortfolioOptimizationInverseVolatilityWeighted - Inverse Volatility Weighted Portfolio
     *
     * Compute the assets weights of the inverse volatility-weighted portfolio, also known as the naive-risk parity portfolio.
     *
     * References
     *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
     *
    **/
    postPortfolioOptimizationInverseVolatilityWeighted(req: operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse>;
    /**
     * postPortfolioOptimizationMarketCapitalizationWeighted - Market Capitalization Weighted Portfolio
     *
     * Compute the assets weights of the market capitalization-weighted portfolio.
     *
     * References
     *  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
     *
    **/
    postPortfolioOptimizationMarketCapitalizationWeighted(req: operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse>;
    /**
     * postPortfolioOptimizationMaximumDecorrelation - Maximum Decorrelation Portfolio
     *
     * Compute the assets weights of the maximum decorrelation portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
     *
     *
     * https://docs.portfoliooptimizer.io/#maximum-decorrelation-portfolio
    **/
    postPortfolioOptimizationMaximumDecorrelation(req: operations.PostPortfolioOptimizationMaximumDecorrelationRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumDecorrelationResponse>;
    /**
     * postPortfolioOptimizationMaximumReturn - Maximum Return Portfolio
     *
     * Compute the assets weights of the maximum return portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
    **/
    postPortfolioOptimizationMaximumReturn(req: operations.PostPortfolioOptimizationMaximumReturnRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumReturnResponse>;
    /**
     * postPortfolioOptimizationMaximumSharpeRatio - Maximum Sharpe Ratio Portfolio
     *
     * Compute the assets weights of the maximum Sharpe ratio portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
    **/
    postPortfolioOptimizationMaximumSharpeRatio(req: operations.PostPortfolioOptimizationMaximumSharpeRatioRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumSharpeRatioResponse>;
    /**
     * postPortfolioOptimizationMeanVarianceEfficient - Mean-Variance Efficient Portfolio
     *
     * Compute the assets weights of a mean-variance efficient portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
    **/
    postPortfolioOptimizationMeanVarianceEfficient(req: operations.PostPortfolioOptimizationMeanVarianceEfficientRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMeanVarianceEfficientResponse>;
    /**
     * postPortfolioOptimizationMinimumCorrelation - Minimum Correlation Portfolio
     *
     * Compute the assets weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
     *
     * References
     *  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
     *
    **/
    postPortfolioOptimizationMinimumCorrelation(req: operations.PostPortfolioOptimizationMinimumCorrelationRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumCorrelationResponse>;
    /**
     * postPortfolioOptimizationMinimumVariance - Minimum Variance Portfolio
     *
     * Compute the assets weights of the minimum variance portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
    **/
    postPortfolioOptimizationMinimumVariance(req: operations.PostPortfolioOptimizationMinimumVarianceRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumVarianceResponse>;
    /**
     * postPortfolioOptimizationMostDiversified - Most Diversified Portfolio
     *
     * Compute the assets weights of the most diversified portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
     *
    **/
    postPortfolioOptimizationMostDiversified(req: operations.PostPortfolioOptimizationMostDiversifiedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMostDiversifiedResponse>;
}
