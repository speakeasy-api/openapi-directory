import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssetsCovarianceMatrix {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAssetsCovarianceMatrix - Covariance Matrix
     *
     * Compute the covariance matrix of assets from either:
     * * The assets correlation matrix and their volatilities (i.e., standard deviations)
     * * The assets correlation matrix and their variances
     * * The assets returns
     *
     * References
     * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
     *
    **/
    postAssetsCovarianceMatrix(req: operations.PostAssetsCovarianceMatrixRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixResponse>;
    /**
     * postAssetsCovarianceMatrixSample - Sample Covariance Matrix
     *
     * Compute the sample covariance matrix of assets returns.
     *
     * > This endpoint is similar to the endpoint [`/assets/covariance/matrix`](#post-/assets/covariance/matrix), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the covariance matrix.
     *
     * References
     * * [Wikipedia, Sample Mean and Covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance)
     *
    **/
    postAssetsCovarianceMatrixSample(req: operations.PostAssetsCovarianceMatrixSampleRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixSampleResponse>;
    /**
     * postAssetsCovarianceMatrixValidation - Covariance Matrix Validation
     *
     * Validate whether a matrix is a covariance matrix.
     *
     * References
     * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
     *
    **/
    postAssetsCovarianceMatrixValidation(req: operations.PostAssetsCovarianceMatrixValidationRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixValidationResponse>;
}
