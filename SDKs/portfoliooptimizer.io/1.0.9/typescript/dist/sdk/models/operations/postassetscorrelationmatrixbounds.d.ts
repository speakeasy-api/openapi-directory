import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCorrelationMatrixBoundsRequestBody extends SpeakeasyBase {
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    /**
     * assetsGroup[k] is the indexes of the assets belonging to the assets group
     */
    assetsGroup: number[];
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixBounds200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCorrelationMatrixLowerBounds[i][j] is the lower bound of the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrixLowerBounds: number[][];
    /**
     * assetsCorrelationMatrixUpperBounds[i][j] is the upper bound of the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrixUpperBounds: number[][];
}
export declare class PostAssetsCorrelationMatrixBoundsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixBounds200ApplicationJSONObject?: PostAssetsCorrelationMatrixBounds200ApplicationJSON;
}
