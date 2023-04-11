import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortfolioOptimization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Equal Risk Contributions Portfolio
     *
     * @remarks
     * Compute the asset weights of the equal risk contributions portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     *
     * References
     *  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
     *
     */
    postPortfolioOptimizationEqualRiskContributions(req: operations.PostPortfolioOptimizationEqualRiskContributionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualRiskContributionsResponse>;
    /**
     * Equal Sharpe Ratio Contributions Portfolio
     *
     * @remarks
     * Compute the asset weights of the equal Sharpe Ratio contributions portfolio.
     *
     * References
     *  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")
     *
     */
    postPortfolioOptimizationEqualSharpeRatioContributions(req: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse>;
    /**
     * Equal Volatility Weighted Portfolio
     *
     * @remarks
     * Compute the asset weights of the equal volatility-weighted portfolio.
     *
     * References
     *  * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)
     *
     */
    postPortfolioOptimizationEqualVolatilityWeighted(req: operations.PostPortfolioOptimizationEqualVolatilityWeightedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualVolatilityWeightedResponse>;
    /**
     * Equal Weighted Portfolio
     *
     * @remarks
     * Compute the asset weights of the equal-weighted portfolio.
     *
     * References
     *  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
     *
     */
    postPortfolioOptimizationEqualWeighted(req: operations.PostPortfolioOptimizationEqualWeightedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualWeightedResponse>;
    /**
     * Hierarchical Risk Parity Portfolio
     *
     * @remarks
     * Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)
     *  * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)
     *
     */
    postPortfolioOptimizationHierarchicalRiskParity(req: operations.PostPortfolioOptimizationHierarchicalRiskParityRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationHierarchicalRiskParityResponse>;
    /**
     * Hierarchical Clustering-Based Risk Parity Portfolio
     *
     * @remarks
     * Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)
     *  * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)
     *  * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)
     *  * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)
     *
     */
    postPortfolioOptimizationHierarchicalRiskParityClusteringBased(req: operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationHierarchicalRiskParityClusteringBasedResponse>;
    /**
     * Inverse Variance Weighted Portfolio
     *
     * @remarks
     * Compute the asset weights of the inverse variance-weighted portfolio.
     *
     * References
     *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
     *
     */
    postPortfolioOptimizationInverseVarianceWeighted(req: operations.PostPortfolioOptimizationInverseVarianceWeightedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationInverseVarianceWeightedResponse>;
    /**
     * Inverse Volatility Weighted Portfolio
     *
     * @remarks
     * Compute the asset weights of the inverse volatility-weighted portfolio.
     *
     * References
     *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
     *
     */
    postPortfolioOptimizationInverseVolatilityWeighted(req: operations.PostPortfolioOptimizationInverseVolatilityWeightedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse>;
    /**
     * Market Capitalization Weighted Portfolio
     *
     * @remarks
     * Compute the asset weights of the market capitalization-weighted portfolio.
     *
     * References
     *  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
     *
     */
    postPortfolioOptimizationMarketCapitalizationWeighted(req: operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse>;
    /**
     * Maximum Decorrelation Portfolio
     *
     * @remarks
     * Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
     *
     */
    postPortfolioOptimizationMaximumDecorrelation(req: operations.PostPortfolioOptimizationMaximumDecorrelationRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumDecorrelationResponse>;
    /**
     * Maximum Ulcer Performance Index Portfolio
     *
     * @remarks
     * Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * Notes:
     * * This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index
     *
     * References
     *  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
     *  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
     *  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)
     *
     */
    postPortfolioOptimizationMaximumUlcerPerformanceIndex(req: operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumUlcerPerformanceIndexResponse>;
    /**
     * Minimum Correlation Portfolio
     *
     * @remarks
     * Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
     *
     * References
     *  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
     *
     */
    postPortfolioOptimizationMinimumCorrelation(req: operations.PostPortfolioOptimizationMinimumCorrelationRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumCorrelationResponse>;
    /**
     * Minimum Ulcer Index Portfolio
     *
     * @remarks
     * Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
     *  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
     *  * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)
     *
     */
    postPortfolioOptimizationMinimumUlcerIndex(req: operations.PostPortfolioOptimizationMinimumUlcerIndexRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumUlcerIndexResponse>;
    /**
     * Most Diversified Portfolio
     *
     * @remarks
     * Compute the asset weights of the most diversified portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
     *
     */
    postPortfolioOptimizationMostDiversified(req: operations.PostPortfolioOptimizationMostDiversifiedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMostDiversifiedResponse>;
}
