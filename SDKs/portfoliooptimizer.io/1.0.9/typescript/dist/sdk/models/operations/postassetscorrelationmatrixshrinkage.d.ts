import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCorrelationMatrixShrinkageRequestBody2 extends SpeakeasyBase {
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    shrinkageFactor: number;
    /**
     * targetCorrelationMatrix[i][j] is the target correlation between the asset i and the asset j
     */
    targetCorrelationMatrix: number[][];
}
/**
 * The shrinkage target correlation matrix
 */
export declare enum PostAssetsCorrelationMatrixShrinkageRequestBody1TargetEquicorrelationMatrixEnum {
    MinimumEquicorrelationMatrix = "minimumEquicorrelationMatrix",
    ZeroEquicorrelationMatrix = "zeroEquicorrelationMatrix",
    MaximumEquicorrelationMatrix = "maximumEquicorrelationMatrix"
}
export declare class PostAssetsCorrelationMatrixShrinkageRequestBody1 extends SpeakeasyBase {
    assets: number;
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    /**
     * The shrinkage factor
     */
    shrinkageFactor: number;
    /**
     * The shrinkage target correlation matrix
     */
    targetEquicorrelationMatrix: PostAssetsCorrelationMatrixShrinkageRequestBody1TargetEquicorrelationMatrixEnum;
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixShrinkage200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixShrinkageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixShrinkage200ApplicationJSONObject?: PostAssetsCorrelationMatrixShrinkage200ApplicationJSON;
}
