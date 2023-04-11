import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisContributionsReturnRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    assetsGroups?: number[][];
    /**
     * assetsReturns[i] is the arithmetic return of asset i
     */
    assetsReturns: number[];
    portfolios: PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * assetsGroupsReturnContributions[k] is the return contribution of the group of assets k to the return of the portfolio
     */
    assetsGroupsReturnContributions?: number[];
    /**
     * assetsReturnContributions[i] is the return contribution of the asset i to the return of the portfolio
     */
    assetsReturnContributions: number[];
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisContributionsReturn200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisContributionsReturnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisContributionsReturn200ApplicationJSONObject?: PostPortfolioAnalysisContributionsReturn200ApplicationJSON;
}
