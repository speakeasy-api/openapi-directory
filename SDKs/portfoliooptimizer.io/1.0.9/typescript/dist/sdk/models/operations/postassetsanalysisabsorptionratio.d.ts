import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors extends SpeakeasyBase {
    /**
     * The number of eigenvectors to retain in the numerator of the absorption ratio, which must be lower than the number of assets; defaults to [1/5-th] the number of assets
     */
    eigenvectorsRetained?: number;
}
export declare class PostAssetsAnalysisAbsorptionRatioRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
    assetsCovarianceMatrixEigenvectors?: PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors;
}
/**
 * OK
 */
export declare class PostAssetsAnalysisAbsorptionRatio200ApplicationJSON extends SpeakeasyBase {
    /**
     * The absorption ratio of the universe of assets
     */
    assetsAbsorptionRatio: number;
}
export declare class PostAssetsAnalysisAbsorptionRatioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsAnalysisAbsorptionRatio200ApplicationJSONObject?: PostAssetsAnalysisAbsorptionRatio200ApplicationJSON;
}
