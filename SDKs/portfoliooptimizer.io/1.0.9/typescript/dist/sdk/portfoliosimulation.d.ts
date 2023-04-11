import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortfolioSimulation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Drift-weight Portfolio Rebalancing
     *
     * @remarks
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).
     *
     * References
     * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
     *
     */
    postPortfolioSimulationRebalancingDriftWeight(req: operations.PostPortfolioSimulationRebalancingDriftWeightRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioSimulationRebalancingDriftWeightResponse>;
    /**
     * Fixed-weight Portfolio Rebalancing
     *
     * @remarks
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.
     *
     * References
     * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
     *
     */
    postPortfolioSimulationRebalancingFixedWeight(req: operations.PostPortfolioSimulationRebalancingFixedWeightRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioSimulationRebalancingFixedWeightResponse>;
    /**
     * Random-weight Portfolio Rebalancing
     *
     * @remarks
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.
     *
     * References
     * * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)
     *
     */
    postPortfolioSimulationRebalancingRandomWeight(req: operations.PostPortfolioSimulationRebalancingRandomWeightRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPortfolioSimulationRebalancingRandomWeightResponse>;
}
