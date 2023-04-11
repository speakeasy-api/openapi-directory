import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCorrelationMatrixNearestRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsApproximateCorrelationMatrix[i][i] is the approximate correlation between the asset i and the asset j
     */
    assetsApproximateCorrelationMatrix: number[][];
    /**
     * assetsFixedCorrelations[k] is the couple of indices (i,j) of the assets i and j for which to keep the approximate correlation assetsApproximateCorrelationMatrix[i][j] fixed
     */
    assetsFixedCorrelations?: number[][];
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixNearest200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixNearestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixNearest200ApplicationJSONObject?: PostAssetsCorrelationMatrixNearest200ApplicationJSON;
}
