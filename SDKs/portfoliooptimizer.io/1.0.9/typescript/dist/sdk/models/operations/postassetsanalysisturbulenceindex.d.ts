import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsAnalysisTurbulenceIndexRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsAverageReturns[i] is the average return of asset i over an historical reference period
     */
    assetsAverageReturns: number[];
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j over an historical reference period
     */
    assetsCovarianceMatrix: number[][];
    /**
     * assetsReturns[i] is the return of asset i over a period different from the historical reference period
     */
    assetsReturns: number[];
}
/**
 * OK
 */
export declare class PostAssetsAnalysisTurbulenceIndex200ApplicationJSON extends SpeakeasyBase {
    /**
     * the turbulence index of the universe of assets
     */
    assetsTurbulenceIndex: number;
}
export declare class PostAssetsAnalysisTurbulenceIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsAnalysisTurbulenceIndex200ApplicationJSONObject?: PostAssetsAnalysisTurbulenceIndex200ApplicationJSON;
}
