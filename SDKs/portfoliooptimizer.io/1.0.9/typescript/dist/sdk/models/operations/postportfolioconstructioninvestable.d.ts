import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioConstructionInvestableRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    assetsGroups?: number[][];
    /**
     * assetsGroupsWeights[i] is the desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present
     */
    assetsGroupsWeights?: number[];
    /**
     * assetsMinimumNotionalValues[i] is the minimum monetary value that the position in the asset i is required to represent when the asset i is included in the portfolio
     */
    assetsMinimumNotionalValues?: number[];
    /**
     * assetsMinimumPositions[i] is the minimum number of shares of the asset i that is required to purchase when the asset i is included in the portfolio (usual values are the same as for assetsSizeLots)
     */
    assetsMinimumPositions?: number[];
    /**
     * assetsPrices[i] is the price of the asset i
     */
    assetsPrices: number[];
    /**
     * assetsSizeLots[i] is the number of shares by which it is required to purchase the asset i (usual values are 1 if the asset needs to be purchased share by share, 100 if the asset needs to be purchased by an integer multiple of 100 shares, and 1/1000000 - e.g. for Robinhood broker - if the asset can be purchased by fractional shares)
     */
    assetsSizeLots?: number[];
    /**
     * assetsWeights[i] is the desired weight of the asset i in the portfolio, in percentage (can be null to indicate no specific desire)
     */
    assetsWeights?: number[];
    /**
     * maximumAssetsGroupsWeights[k] is the maximum desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present
     */
    maximumAssetsGroupsWeights?: number[];
    /**
     * The monetary value of the portfolio
     */
    portfolioValue: number;
}
/**
 * OK
 */
export declare class PostPortfolioConstructionInvestable200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsPositions[i] is the number of shares of the asset i in the portfolio
     */
    assetsPositions: number[];
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
export declare class PostPortfolioConstructionInvestableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioConstructionInvestable200ApplicationJSONObject?: PostPortfolioConstructionInvestable200ApplicationJSON;
}
