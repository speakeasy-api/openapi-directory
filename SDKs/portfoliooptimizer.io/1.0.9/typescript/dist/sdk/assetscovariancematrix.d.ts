import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssetsCovarianceMatrix {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Covariance Matrix
     *
     * @remarks
     * Compute the covariance matrix of assets from either:
     * * The asset correlation matrix and their volatilities (i.e., standard deviations)
     * * The asset correlation matrix and their variances
     * * The asset returns
     *
     * References
     * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
     *
     */
    postAssetsCovarianceMatrix(req: any, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixResponse>;
    /**
     * Covariance Matrix Effective Rank
     *
     * @remarks
     * Compute the effective rank of an asset covariance matrix.
     *
     * References
     * * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)
     *
     */
    postAssetsCovarianceMatrixEffectiveRank(req: operations.PostAssetsCovarianceMatrixEffectiveRankRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixEffectiveRankResponse>;
    /**
     * Exponentially Weighted Covariance Matrix
     *
     * @remarks
     * Compute an exponentially weighted covariance matrix of assets returns.
     *
     * References
     * * [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a)
     *
     */
    postAssetsCovarianceMatrixExponentiallyWeighted(req: operations.PostAssetsCovarianceMatrixExponentiallyWeightedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixExponentiallyWeightedResponse>;
    /**
     * Covariance Matrix Validation
     *
     * @remarks
     * Validate whether a matrix is a covariance matrix.
     *
     * References
     * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
     *
     */
    postAssetsCovarianceMatrixValidation(req: operations.PostAssetsCovarianceMatrixValidationRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixValidationResponse>;
}
