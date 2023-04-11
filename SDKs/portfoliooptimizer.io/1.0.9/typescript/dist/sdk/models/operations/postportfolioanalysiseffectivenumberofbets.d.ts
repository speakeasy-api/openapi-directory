import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The method used to extract the uncorrelated risk factors from the asset covariance matrix
 */
export declare enum PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyFactorsExtractionMethodEnum {
    PrincipalComponentAnalysis = "principalComponentAnalysis",
    ExactMinimumLinearTorsion = "exactMinimumLinearTorsion",
    ApproximateMinimumLinearTorsion = "approximateMinimumLinearTorsion"
}
export declare class PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisEffectiveNumberOfBetsRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    /**
     * The method used to extract the uncorrelated risk factors from the asset covariance matrix
     */
    factorsExtractionMethod?: PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyFactorsExtractionMethodEnum;
    portfolios: PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisEffectiveNumberOfBets200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The effective number of bets of the portfolio
     */
    portfolioEffectiveNumberOfBets: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisEffectiveNumberOfBets200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisEffectiveNumberOfBets200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisEffectiveNumberOfBetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisEffectiveNumberOfBets200ApplicationJSONObject?: PostPortfolioAnalysisEffectiveNumberOfBets200ApplicationJSON;
}
