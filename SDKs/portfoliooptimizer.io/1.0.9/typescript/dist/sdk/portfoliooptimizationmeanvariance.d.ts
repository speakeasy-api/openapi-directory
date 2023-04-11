import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortfolioOptimizationMeanVariance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Maximum Return Portfolio
     *
     * @remarks
     * Compute the asset weights of the maximum return portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMaximumReturn(req: operations.PostPortfolioOptimizationMaximumReturnRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumReturnResponse>;
    /**
     * Diversified Maximum Return Portfolio
     *
     * @remarks
     * Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.
     *
     * References
     *  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
     *  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMaximumReturnDiversified(req: operations.PostPortfolioOptimizationMaximumReturnDiversifiedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumReturnDiversifiedResponse>;
    /**
     * Subset Resampling-Based Maximum Return Portfolio
     *
     * @remarks
     * Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
     *  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMaximumReturnSubsetResamplingBased(req: operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedResponse>;
    /**
     * Maximum Sharpe Ratio Portfolio
     *
     * @remarks
     * Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMaximumSharpeRatio(req: operations.PostPortfolioOptimizationMaximumSharpeRatioRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumSharpeRatioResponse>;
    /**
     * Diversified Maximum Sharpe Ratio Portfolio
     *
     * @remarks
     * Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.
     *
     * References
     *  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
     *  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMaximumSharpeRatioDiversified(req: operations.PostPortfolioOptimizationMaximumSharpeRatioDiversifiedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumSharpeRatioDiversifiedResponse>;
    /**
     * Subset Resampling-Based Maximum Sharpe Ratio Portfolio
     *
     * @remarks
     * Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
     *  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased(req: operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedResponse>;
    /**
     * Mean-Variance Efficient Portfolio
     *
     * @remarks
     * Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMeanVarianceEfficient(req: operations.PostPortfolioOptimizationMeanVarianceEfficientRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMeanVarianceEfficientResponse>;
    /**
     * Diversified Mean-Variance Efficient Portfolio
     *
     * @remarks
     * Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.
     *
     * > A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.
     *
     * References
     *  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
     *  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMeanVarianceEfficientDiversified(req: operations.PostPortfolioOptimizationMeanVarianceEfficientDiversifiedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMeanVarianceEfficientDiversifiedResponse>;
    /**
     * Subset Resampling-Based Mean-Variance Efficient Portfolio
     *
     * @remarks
     * Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
     *  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased(req: operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedResponse>;
    /**
     * Minimum Variance Portfolio
     *
     * @remarks
     * Compute the asset weights of the minimum variance portfolio, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMinimumVariance(req: operations.PostPortfolioOptimizationMinimumVarianceRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumVarianceResponse>;
    /**
     * Diversified Minimum Variance Portfolio
     *
     * @remarks
     * Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.
     *
     * References
     *  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
     *  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMinimumVarianceDiversified(req: operations.PostPortfolioOptimizationMinimumVarianceDiversifiedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumVarianceDiversifiedResponse>;
    /**
     * Subset Resampling-Based Minimum Variance Portfolio
     *
     * @remarks
     * Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     *  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
     *  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioOptimizationMinimumVarianceSubsetResamplingBased(req: operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedResponse>;
}
