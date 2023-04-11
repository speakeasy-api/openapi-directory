import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The distance metric to use to compute the informativeness of the asset correlation matrix
 */
export declare enum PostAssetsCorrelationMatrixInformativenessRequestBodyDistanceMetricEnum {
    Euclidean = "euclidean",
    CorrelationMatrix = "correlationMatrix",
    Bures = "bures"
}
export declare class PostAssetsCorrelationMatrixInformativenessRequestBody extends SpeakeasyBase {
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    /**
     * The distance metric to use to compute the informativeness of the asset correlation matrix
     */
    distanceMetric?: PostAssetsCorrelationMatrixInformativenessRequestBodyDistanceMetricEnum;
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixInformativeness200ApplicationJSON extends SpeakeasyBase {
    /**
     * The informativeness of the asset correlation matrix
     */
    assetsCorrelationMatrixInformativeness: number;
}
export declare class PostAssetsCorrelationMatrixInformativenessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixInformativeness200ApplicationJSONObject?: PostAssetsCorrelationMatrixInformativeness200ApplicationJSON;
}
