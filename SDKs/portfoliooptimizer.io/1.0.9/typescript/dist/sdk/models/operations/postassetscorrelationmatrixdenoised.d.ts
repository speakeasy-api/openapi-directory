import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The method used to denoise the asset correlation matrix
 */
export declare enum PostAssetsCorrelationMatrixDenoisedRequestBodyDenoisingMethodEnum {
    EigenvaluesClipping = "eigenvaluesClipping"
}
export declare class PostAssetsCorrelationMatrixDenoisedRequestBody extends SpeakeasyBase {
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    /**
     * The aspect ratio of the asset correlation matrix, defined as the number of assets divided by the number of asset returns per asset used to compute the asset correlation matrix
     */
    assetsCorrelationMatrixAspectRatio: number;
    /**
     * The method used to denoise the asset correlation matrix
     */
    denoisingMethod?: PostAssetsCorrelationMatrixDenoisedRequestBodyDenoisingMethodEnum;
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixDenoised200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; assetsCorrelationMatrix is possibly null in case the denoising method did not manage to denoise the provided asset correlation matrix
     */
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixDenoisedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixDenoised200ApplicationJSONObject?: PostAssetsCorrelationMatrixDenoised200ApplicationJSON;
}
