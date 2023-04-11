import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioConstructionRandomRequestBodyConstraints extends SpeakeasyBase {
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
export declare class PostPortfolioConstructionRandomRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    constraints?: PostPortfolioConstructionRandomRequestBodyConstraints;
    /**
     * The number of portfolios to construct
     */
    portfolios?: number;
}
export declare class PostPortfolioConstructionRandom200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
     */
    assetsWeights: number[];
}
/**
 * OK
 */
export declare class PostPortfolioConstructionRandom200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioConstructionRandom200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioConstructionRandomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioConstructionRandom200ApplicationJSONObject?: PostPortfolioConstructionRandom200ApplicationJSON;
}
