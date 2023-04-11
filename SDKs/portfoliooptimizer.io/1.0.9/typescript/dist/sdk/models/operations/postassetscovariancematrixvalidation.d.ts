import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCovarianceMatrixValidationRequestBody extends SpeakeasyBase {
    /**
     * The number of assets
     */
    assets: number;
    /**
     * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
     */
    assetsCovarianceMatrix: number[][];
}
/**
 * Indicates whether the matrix is a valid covariance matrix
 */
export declare enum PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum {
    ValidCovarianceMatrix = "valid covariance matrix",
    InvalidCovarianceMatrixNonSymmetricMatrix = "invalid covariance matrix - non symmetric matrix",
    InvalidCovarianceMatrixNonPositiveDiagonalElements = "invalid covariance matrix - non positive diagonal elements",
    InvalidCovarianceMatrixNonPositiveSemiDefiniteMatrix = "invalid covariance matrix - non positive semi-definite matrix"
}
/**
 * OK
 */
export declare class PostAssetsCovarianceMatrixValidation200ApplicationJSON extends SpeakeasyBase {
    /**
     * Indicates whether the matrix is a valid covariance matrix
     */
    message: PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum;
}
export declare class PostAssetsCovarianceMatrixValidationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCovarianceMatrixValidation200ApplicationJSONObject?: PostAssetsCovarianceMatrixValidation200ApplicationJSON;
}
