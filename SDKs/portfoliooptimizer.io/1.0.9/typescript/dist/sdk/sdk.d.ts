import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { AssetsCorrelationMatrix } from "./assetscorrelationmatrix";
import { AssetsCovarianceMatrix } from "./assetscovariancematrix";
import { AssetsReturns } from "./assetsreturns";
import { AssetsVariance } from "./assetsvariance";
import { AssetsVolatility } from "./assetsvolatility";
import { Factors } from "./factors";
import { PortfolioAnalysis } from "./portfolioanalysis";
import { PortfolioConstruction } from "./portfolioconstruction";
import { PortfolioOptimization } from "./portfoliooptimization";
import { PortfolioSimulation } from "./portfoliosimulation";
export declare const ServerList: readonly ["https://api.portfoliooptimizer.io/v1", "https://eu-west-1.api.portfoliooptimizer.io/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    assetsCorrelationMatrix: AssetsCorrelationMatrix;
    assetsCovarianceMatrix: AssetsCovarianceMatrix;
    assetsReturns: AssetsReturns;
    assetsVariance: AssetsVariance;
    assetsVolatility: AssetsVolatility;
    factors: Factors;
    portfolioAnalysis: PortfolioAnalysis;
    portfolioConstruction: PortfolioConstruction;
    portfolioOptimization: PortfolioOptimization;
    portfolioSimulation: PortfolioSimulation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
