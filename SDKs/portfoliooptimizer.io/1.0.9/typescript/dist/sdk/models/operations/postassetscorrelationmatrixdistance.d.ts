import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The distance metric to use to compute the distance between the asset correlation matrix and the reference correlation matrix
 */
export declare enum PostAssetsCorrelationMatrixDistanceRequestBodyDistanceMetricEnum {
    Euclidean = "euclidean",
    CorrelationMatrix = "correlationMatrix",
    Bures = "bures"
}
export declare class PostAssetsCorrelationMatrixDistanceRequestBody extends SpeakeasyBase {
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    /**
     * The distance metric to use to compute the distance between the asset correlation matrix and the reference correlation matrix
     */
    distanceMetric?: PostAssetsCorrelationMatrixDistanceRequestBodyDistanceMetricEnum;
    /**
     * referenceCorrelationMatrix[i][j] is the reference correlation between the asset i and the asset j
     */
    referenceCorrelationMatrix: number[][];
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixDistance200ApplicationJSON extends SpeakeasyBase {
    /**
     * The computed distance between the two correlation matrices
     */
    assetsCorrelationMatrixDistance: number;
}
export declare class PostAssetsCorrelationMatrixDistanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixDistance200ApplicationJSONObject?: PostAssetsCorrelationMatrixDistance200ApplicationJSON;
}
