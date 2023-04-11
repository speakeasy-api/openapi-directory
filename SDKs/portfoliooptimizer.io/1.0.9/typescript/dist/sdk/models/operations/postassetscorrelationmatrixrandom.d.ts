import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCorrelationMatrixRandomRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixRandom200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixRandomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixRandom200ApplicationJSONObject?: PostAssetsCorrelationMatrixRandom200ApplicationJSON;
}
