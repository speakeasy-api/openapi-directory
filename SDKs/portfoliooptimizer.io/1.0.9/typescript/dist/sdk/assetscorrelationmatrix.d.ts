import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssetsCorrelationMatrix {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAssetsCorrelationMatrix - Correlation Matrix
     *
     * Compute the Pearson correlation matrix of assets from either:
     * * The assets returns
     * * The assets covariance matrix
     *
     * References
     * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
     *
    **/
    postAssetsCorrelationMatrix(req: operations.PostAssetsCorrelationMatrixRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixResponse>;
    /**
     * postAssetsCorrelationMatrixNearest - Nearest Correlation Matrix
     *
     * Compute the _closest_ correlation matrix to an approximate assets correlation matrix, optionally keeping a selected number of correlations fixed, _closest_ being defined in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm).
     *
     * References
     * * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
     *
    **/
    postAssetsCorrelationMatrixNearest(req: operations.PostAssetsCorrelationMatrixNearestRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixNearestResponse>;
    /**
     * postAssetsCorrelationMatrixShrinkage - Correlation Matrix Shrinkage
     *
     * Compute a correlation matrix as a weighted average of an assets correlation matrix and a target correlation matrix, the target correlation matrix being either:
     * * An equicorrelation matrix made of 1
     * * An equicorrelation matrix made of 0
     * * An equicorrelation matrix made of -1/(n-1), with n the number of assets
     * * A provided correlation matrix
     *
     * References
     * * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
     *
    **/
    postAssetsCorrelationMatrixShrinkage(req: operations.PostAssetsCorrelationMatrixShrinkageRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixShrinkageResponse>;
    /**
     * postAssetsCorrelationMatrixValidation - Correlation Matrix Validation
     *
     * Validate whether a matrix is a correlation matrix.
     *
     * References
     * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
     *
    **/
    postAssetsCorrelationMatrixValidation(req: operations.PostAssetsCorrelationMatrixValidationRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixValidationResponse>;
}
