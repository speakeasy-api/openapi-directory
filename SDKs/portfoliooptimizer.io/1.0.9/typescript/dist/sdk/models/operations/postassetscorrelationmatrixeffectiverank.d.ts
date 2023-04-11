import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCorrelationMatrixEffectiveRankRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixEffectiveRank200ApplicationJSON extends SpeakeasyBase {
    /**
     * The effective rank of the asset correlation matrix
     */
    assetsCorrelationMatrixEffectiveRank: number[][];
}
export declare class PostAssetsCorrelationMatrixEffectiveRankResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixEffectiveRank200ApplicationJSONObject?: PostAssetsCorrelationMatrixEffectiveRank200ApplicationJSON;
}
