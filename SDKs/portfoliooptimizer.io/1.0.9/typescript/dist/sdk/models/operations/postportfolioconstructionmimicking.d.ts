import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioConstructionMimickingRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length
     */
    assetReturns: number[];
}
export declare class PostPortfolioConstructionMimickingRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    /**
     * assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups
     */
    assetsGroupsMatrix?: number[][];
    /**
     * maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided
     */
    maximumAssetsGroupsWeights?: number[];
    /**
     * maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage
     */
    maximumAssetsWeights?: number[];
    /**
     * The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure
     */
    maximumPortfolioExposure?: number;
    /**
     * minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage
     */
    minimumAssetsWeights?: number[];
    /**
     * The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure
     */
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioConstructionMimickingRequestBody extends SpeakeasyBase {
    assets: PostPortfolioConstructionMimickingRequestBodyAssets[];
    /**
     * benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the assetReturns arrays
     */
    benchmarkReturns: number[];
    constraints?: PostPortfolioConstructionMimickingRequestBodyConstraints;
}
/**
 * OK
 */
export declare class PostPortfolioConstructionMimicking200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioConstructionMimickingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioConstructionMimicking200ApplicationJSONObject?: PostPortfolioConstructionMimicking200ApplicationJSON;
}
