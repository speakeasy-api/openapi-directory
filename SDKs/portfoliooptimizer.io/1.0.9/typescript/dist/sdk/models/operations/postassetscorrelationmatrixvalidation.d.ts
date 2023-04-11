import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCorrelationMatrixValidationRequestBody extends SpeakeasyBase {
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
 * Indicates whether the matrix is a valid correlation matrix
 */
export declare enum PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum {
    ValidCorrelationMatrix = "valid correlation matrix",
    InvalidCorrelationMatrixNonSymmetricMatrix = "invalid correlation matrix - non symmetric matrix",
    InvalidCorrelationMatrixNonPositiveDiagonalElements = "invalid correlation matrix - non positive diagonal elements",
    InvalidCorrelationMatrixNonPositiveSemiDefiniteMatrix = "invalid correlation matrix - non positive semi-definite matrix"
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixValidation200ApplicationJSON extends SpeakeasyBase {
    /**
     * Indicates whether the matrix is a valid correlation matrix
     */
    message: PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum;
}
export declare class PostAssetsCorrelationMatrixValidationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixValidation200ApplicationJSONObject?: PostAssetsCorrelationMatrixValidation200ApplicationJSON;
}
