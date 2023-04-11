import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCovarianceMatrixEffectiveRankRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
}
/**
 * OK
 */
export declare class PostAssetsCovarianceMatrixEffectiveRank200ApplicationJSON extends SpeakeasyBase {
    /**
     * The effective rank of the asset covariance matrix
     */
    assetsCovarianceMatrixEffectiveRank: number[][];
}
export declare class PostAssetsCovarianceMatrixEffectiveRankResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCovarianceMatrixEffectiveRank200ApplicationJSONObject?: PostAssetsCovarianceMatrixEffectiveRank200ApplicationJSON;
}
