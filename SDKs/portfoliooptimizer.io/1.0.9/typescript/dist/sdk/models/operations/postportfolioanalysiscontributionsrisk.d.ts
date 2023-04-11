import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisContributionsRiskRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    assetsGroups?: number[][];
    portfolios: PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * assetsGroupsRiskContributions[k] is the risk contribution of the group of assets k to the risk of the portfolio
     */
    assetsGroupsRiskContributions?: number[];
    /**
     * assetsRiskContributions[i] is the risk contribution of the asset i to the risk of the portfolio
     */
    assetsRiskContributions: number[];
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisContributionsRisk200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisContributionsRiskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisContributionsRisk200ApplicationJSONObject?: PostPortfolioAnalysisContributionsRisk200ApplicationJSON;
}
