import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PortfolioConstruction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postPortfolioConstructionInvestable - Investable Portfolio
     *
     * Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
     * * The desired assets weights
     * * The desired assets groups weights
     * * The desired maximum assets groups weights
     * * The prices of the assets
     * * The portfolio value
     * * The requirement to purchase some assets by round lots or by odd lots
     * * The possibility to purchase some assets by a fractional quantity of shares
     * * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
     *
     * References
     * * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
     *
    **/
    postPortfolioConstructionInvestable(req: operations.PostPortfolioConstructionInvestableRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioConstructionInvestableResponse>;
    /**
     * postPortfolioConstructionMimicking - Mimicking Portfolio
     *
     * Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * References
     * * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
     *
    **/
    postPortfolioConstructionMimicking(req: operations.PostPortfolioConstructionMimickingRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioConstructionMimickingResponse>;
    /**
     * postPortfolioConstructionRandom - Random Portfolio
     *
     * Construct one or several random portfolio(s), optionally subject to:
     * * Minimum and maximum weights constraints
     * * Minimum and maximum portfolio exposure constraints
     *
     * > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
     *
     * References
     * * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
     *
    **/
    postPortfolioConstructionRandom(req: operations.PostPortfolioConstructionRandomRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioConstructionRandomResponse>;
}
