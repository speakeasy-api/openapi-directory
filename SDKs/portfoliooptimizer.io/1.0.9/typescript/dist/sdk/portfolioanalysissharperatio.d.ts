import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortfolioAnalysisSharpeRatio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Sharpe Ratio
     *
     * @remarks
     * Compute the Sharpe ratio of one or several portfolio(s) from either:
     * * Portfolio assets arithmetic returns and assets covariance matrix
     * * Portfolio values
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     *
     */
    postPortfolioAnalysisSharpeRatio(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisSharpeRatioResponse>;
    /**
     * Bias-Adjusted Sharpe Ratio
     *
     * @remarks
     * Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.
     *
     * References
     * * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
     *
     */
    postPortfolioAnalysisSharpeRatioBiasAdjusted(req: operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedResponse>;
    /**
     * Sharpe Ratio Confidence Interval
     *
     * @remarks
     * Build a confidence interval for the Sharpe ratio of one or several portfolio(s).
     *
     * References
     * * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
     *
     */
    postPortfolioAnalysisSharpeRatioConfidenceInterval(req: operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalResponse>;
    /**
     * Probabilistic Sharpe Ratio
     *
     * @remarks
     * Compute the probabilistic Sharpe ratio of one or several portfolio(s).
     *
     * References
     * * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
     * * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)
     *
     */
    postPortfolioAnalysisSharpeRatioProbabilistic(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisSharpeRatioProbabilisticResponse>;
    /**
     * Minimum Track Record Length
     *
     * @remarks
     * Compute the minimum track record length of one or several portfolio(s).
     *
     * References
     * * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)
     *
     */
    postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength(req: any, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthResponse>;
}
